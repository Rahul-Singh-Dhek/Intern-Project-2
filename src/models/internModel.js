const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
name:{
    type:String,
    require:true,
    trim:true
},
email:{
    type:String,
    trim:true,
    lowercase:true,
    unique:true,
    match: [/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
]
},
    mobile:{
        type:Number,
        require:"plz enter valid mobile",
        unique:true,
        trim:true,
        match: [/^[0-9]\d{10}$/ ]
    },
    collegeId:{
<<<<<<< HEAD
        type:ObjectId, ref:"college",
=======
        type:ObjectId,
         ref:"college",
>>>>>>> 64589097ba7a21b429b48b8574fc06c95092874b
        require:true

    },
    isDeleted:{
        type:Boolean,
        default:false
    },
    isDeleted:{
     type:Date,
     default:null
    }


},{timestamps:true})





module.exports=mongoose.model("Intern",internSchema)