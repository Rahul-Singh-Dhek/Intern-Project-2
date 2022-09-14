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
        require:true,
        unique:true,
        trim:true,
        match: [/^[6-9]\d{9}$/
        ]
    },
    collegeId:{
        type:ObjectId,
         ref:"college",
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