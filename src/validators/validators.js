const {default: mongoose} = require('mongoose')


const isValidEmail = function (mail) {
    if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(mail)) {
    return true;
    }
}

const isValidId = function (data) {
    return mongoose.Types.ObjectId.isValid(data);
  };





  


  module.exports={isValidEmail,isValidId}