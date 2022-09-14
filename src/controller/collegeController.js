
const collegeModel = require("../models/collegeModel")

const createCollege = async function (req, res) {
    try {
        let body = req.body
        if((Object.keys(req.body)).length==0){
            return res.status(400).send({ status: false, message: "Please provide details of the college" })
        }
        if (!body.name) {
            return res.status(400).send({ status: false, message: "Please provide name of the college" })
        }
        if (!(/^[a-z]{2,20}$/i.test(body.name))) {
            return res.status(400).send({ status: false, message: "Name can contain only letters" })
        }
        let name = await collegeModel.findOne({ name: body.name })
        if (name) {
            return res.status(400).send({ status: false, message: "Please provide unique name" })
        }

        if (!body.fullName) {
            return res.status(400).send({ status: false, message: "Please provide fullName of the college" })
        }
        if (!(/^[a-z ,]{2,200}$/i.test(body.fullName))) {
            return res.status(400).send({ status: false, message: "fullName can contain only letters,space and comma" })
        }

        if (!body.logoLink) {
            return res.status(400).send({ status: false, message: "Please provide logoLink of the college" })
        }
        if (typeof body.logoLink !== "string") {
            return res.status(400).send({ status: false, message: "LogoLink must be an Array" })
        }

        let data = await collegeModel.create(body)
        return res.status(201).send({ status: true, data: data })
    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
}

module.exports.createCollege=createCollege