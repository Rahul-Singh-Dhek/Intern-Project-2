
const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")
const validator = require("../validators/validators")



const createCollege = async function (req, res) {
    try {
        let body = req.body
        if ((Object.keys(req.body)).length == 0) {
            return res.status(400).send({ status: false, message: "Please provide details of the college" })
        }
        if (!body.name) {
            return res.status(400).send({ status: false, message: "Please provide name of the college" })
        }
        body.name=body.name.toLowerCase()
        if (!validator.isValidShortName(body.name)) {
            return res.status(400).send({ status: false, message: "Name can contain only letters" })
        }
        let name = await collegeModel.findOne({ name: body.name,isDeleted:false })
        if (name) {
            return res.status(400).send({ status: false, message: "Please provide unique name" })
        }
        if (!body.fullName) {
            return res.status(400).send({ status: false, message: "Please provide fullName of the college" })
        }
        if (!validator.isValidFullName(body.fullName)) {
            return res.status(400).send({ status: false, message: "fullName can contain only letters,space,comma,'&',and '-' " })
        }
        //-----------------------------------------------------------------------------------------------------------------
        // let fullName = await collegeModel.findOne({ fullName: body.fullName,isDeleted:false })
        // if(fullName){
        //     return res.status(400).send({ status: false, message: "Please provide unique fullName" })
        // }
        //-----------------------------------------------------------------------------------------------------------------
        if (!body.logoLink) {
            return res.status(400).send({ status: false, message: "Please provide logoLink of the college" })
        }
        if(!validator.isValidLink(body.logoLink)){
            return res.status(400).send({status:false,message:"LogoLink is invalid"})
        }
        let data = await collegeModel.create(body)
        return res.status(201).send({ status: true, data: data })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

const collegeDetails = async function (req, res) {
    try {
        let collegeName = req.query.collegeName
        if (!collegeName) {
            return res.status(400).send({ status: false, message: "Please provide a college Name" })
        }
        if (!validator.isValidShortName(collegeName)) {
            return res.status(400).send({ status: false, message: "collegeName can contain only letters" })
        }
        let collegeDetail = await collegeModel.findOne({ name: collegeName.toLowerCase() , isDeleted:false})
        if (!collegeDetail) {
            return res.status(404).send({ status: false, message: "No college exists with this Name" })
        }
        let ColId = collegeDetail["_id"]
        let Interns = await internModel.find({ collegeId: ColId ,isDeleted:false}).select({name:1,email:1,mobile:1})
        //-----------------------------------------------------------------------------------------------------------
        // if (Interns.length == 0) {
        //     return res.status(404).send({ status: false, message: "No interns found of this college" })
        // }
        //------------------------------------------------------------------------------------------------------------
        let data={name:collegeDetail.name,fullName:collegeDetail.fullName,logoLink:collegeDetail.logoLink,interns:Interns}
        return res.status(200).send({data:data,status:true})
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.collegeDetails=collegeDetails
module.exports.createCollege = createCollege