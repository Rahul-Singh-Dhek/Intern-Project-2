const express = require('express');
const router = express.Router();
const collegeController=require("../controller/collegeController.js")
//========================================================CollegeApi=================================================================
router.post("/functionup/colleges",collegeController.createCollege)
router.get("/functionup/collegeDetails",collegeController.collegeDetails)




module.exports = router;
