const express = require('express');
const router = express.Router();
const collegeController=require("../controller/collegeController.js")
console.log(router)
router.post("/functionup/colleges",collegeController.createCollege)



module.exports = router;
