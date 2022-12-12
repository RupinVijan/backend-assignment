const mongoose = require("mongoose");

const CompanyModel = mongoose.Schema({
  companyName: {
    type: String,
    required:true,
    unique:true
  },
  numberOfEmployees:{
    type:Number,
    default:0
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("company-model", CompanyModel);