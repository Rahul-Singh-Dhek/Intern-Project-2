const internModule=require("../models/internModel")
const validator=require("../validators/validators")
const mongoose = require('mongoose')
const collegeModel = require("../models/collegeModel")


const createIntern = async function(req,res){
try{const data =req.body
if(Object.keys(data).length == 0)return res.status(404).send({status:false,msg:"Data must be present."})

let{name,email,mobile,collegeName}=data

//edge cases

if(!name || !name.trim())return res.status(400).send({status:false,msg:"Intern name must be required."})
if(!email)return res.status(400).send({status:false,msg:"email must be required."})
if(!validator.isValidEmail(email)) return res.status(400).send({status:false,msg:"Please enter valid mobile."})
if(!mobile)return res.status(400),send({status:false,msg:"mobile must be required."})
//if(!validator.isValidEmail(mobile)) return res.status(400).send({status:false,msg:"Please enter valid mobile."})
if(!collegeName)return res.status(400).send({status:false,msg:"collegeName must be required."})

//college id is present or not
let collegeDetails= await collegeModel.findOne({name:collegeName}).select({id:1})
if(!collegeDetails)return res.status(400).send({status:false,msg:"college not found..Please try with another college Name."})
let



}
}





