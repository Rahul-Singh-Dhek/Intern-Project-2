const express = require('express');
const router = express.Router();
const collegeController=require("../controller/collegeController.js")

router.post("/functionup/colleges",collegeController.createCollege)


















module.exports = router;
