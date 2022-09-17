const internModel = require("../models/internModel")
const validator = require("../validators/validators")
const mongoose = require('mongoose')
const collegeModel = require("../models/collegeModel")


const createIntern = async function (req, res) {
    try {
        const data = req.body
        if (Object.keys(data).length == 0) return res.status(404).send({ status: false, msg: "Please provide Intern Details." })
        let { name, email, mobile, collegeName } = data
        let test = ""
        //------------------------------------------------------------------------------------------------------------------------------        
        if (!name) {
            test = "Intern name must be required"
        } else if (!validator.isValidName(name)) {
            test = (test.length == 0) ? "Intern name must consist of only leters" : test + " ; " + "Intern name must consist of only leters"
        }
        //------------------------------------------------------------------------------------------------------------------------------        
        if (!email) {
            test = (test.length == 0) ? "email must be required" : test + " ; " + "email must be required"
        } else {
            if (!validator.isValidEmail(email)) {
                test = (test.length == 0) ? "Please enter valid email" : test + " ; " + "Please enter valid email"
            } else {
                let doc = await internModel.findOne({ email: email, isDeleted: false })
                if (doc) {
                    test = (test.length == 0) ? "email is already registered" : test + " ; " + "email is already registered"
                }
            }
        }
        //------------------------------------------------------------------------------------------------------------------------------        
        if (!mobile) {
            test = (test.length == 0) ? "mobile must be required" : test + " ; " + "mobile must be required"
        } else {
            if (!validator.isValidMobile(mobile)) {
                test = (test.length == 0) ? "Please enter valid mobile" : test + " ; " + "Please enter valid mobile"
            } else {
                doc = await internModel.findOne({ mobile: mobile, isDeleted: false })
                if (doc) {
                    test = (test.length == 0) ? "mobile is already registered" : test + " ; " + "mobile is already registered"
                }
            }
        }
        //------------------------------------------------------------------------------------------------------------------------------        
        let collegeDetails;
        if (!collegeName) {
            test = (test.length == 0) ? "collegeName must be required" : test + " ; " + "collegeName must be required"
        } else {
            if (!validator.isValidShortName(collegeName)) {
                test = (test.length == 0) ? "collegeName can contain only letters" : test + " ; " + "collegeName can contain only letters"
            } else {
                collegeDetails = await collegeModel.findOne({ name: collegeName.toLowerCase(), isDeleted: false })
                if (!collegeDetails) {
                    test = (test.length == 0) ? "college not found..Please try with another college Name" : test + " ; " + "college not found..Please try with another college Name"
                }
            }
        }
        //------------------------------------------------------------------------------------------------------------------------------        
        if (test) {
            return res.status(400).send({ status: false, msg: test })
        }
        data["collegeId"] = collegeDetails["_id"]

        let result = await internModel.create(data)
        return res.status(201).send({ status: true, data: result })
    }
    catch (err) {
        return res.status(500).send({ status: false, msg: err.message })
    }
}

module.exports.createIntern = createIntern



