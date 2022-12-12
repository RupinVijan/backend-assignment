const mongoose = require("mongoose");
const companyModel = require("./companyModel");

const EmployeeModel = mongoose.Schema({
  employeeName:{
    type:String,
    required:true
  },
  employeeEmail:{
    type:String,
    required:true,
    unique:true
  },
  employeePhoneNumber:{
    type:String,
    required:true,
    unique:true
  },
  company:{
    type: mongoose.Schema.Types.ObjectId,
    ref: companyModel,
  }
}, {
  timestamps: true
});
module.exports = mongoose.model("employee-model", EmployeeModel);