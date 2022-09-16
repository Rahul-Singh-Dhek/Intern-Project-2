const express = require('express');
const router = express.Router();
const collegeController=require("../controller/collegeController.js")
const internController=require("../controller/internController")
//========================================================CollegeApi=================================================================
router.post("/functionup/colleges",collegeController.createCollege)
router.get("/functionup/collegeDetails",collegeController.collegeDetails)
router.post("/functionup/interns",internController.createIntern)
router.all("/*", function (req, res) {
    res.status(400).send({ status: false, message: "Invalid path params" });
  });

module.exports = router;
