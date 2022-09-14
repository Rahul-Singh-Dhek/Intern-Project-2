const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")

const createIntern=async function(req,res){
    let body=req.body
    if(!body.name){
        return res.status(400).send({status:false,message: "Please provide name"})
    }
    if(!body.mobile){
        return res.status(400).send({status:false,message: "Please provide mobile"})
    }
    if(!body.email){
        return res.status(400).send({status:false,message:"Please provode"})
    }


}