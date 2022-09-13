const mongoose=require("mongoose")
const collegeModel=require("../models/collegeModel")

const createCollege=async function(req,res){
    let data=req.body
    if(!data.name){
        return res.send({status: false,message: "Please provide name of the college"})
    }
    if(!(/^[a-z]{2,20}$/i.test(data.name))){
        return res.send({status:false,message:"Name should contain only letters"})
    }
    let name=await collegeModel.findOne({name:data.name})
    if(!name){

    }



}