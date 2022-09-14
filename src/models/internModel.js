const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        trim: true
    },
    email: {
        type: String,
        trim: true,
        require:true,
        unique: true

    },
    mobile: {
        type: String,
        require: true,
        unique: true
    },
    collegeId: {
        type: ObjectId,
        ref: "college",
        require: true

    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestamps: true })




module.exports = mongoose.model("Intern", internSchema)