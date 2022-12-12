const employeeModel = require("../models/employeeModel");
const companyModel = require("../models/companyModel");

exports.getAllTokenData = async (req,res) => {
	try
	{
		const companyName = req.query.name;
		//find company by company name
		let companyToFind = await companyModel.findOne({companyName})
		if(!companyToFind){
			return res.status(404).json({status:false ,users, msg: "Company name is invalid!" });
		}
		//finding employee by company id
		const users = await employeeModel.find({company:companyToFind.id});
		res.status(200).json({status:true ,users, msg: "Found successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({status:false ,msg: "Internal Server Error"});
	}
}

exports.postEmployeeData = async (req,res) => {
	try
	{
		const {companyName} = req.body;
			//find company by company name
		let companyToFind = await companyModel.findOne({companyName})
		if(!companyToFind){
			return res.status(404).json({status:false ,users, msg: "Company name is invalid!" });
		}
		//post employee data
		const users = await employeeModel.create({...req.body , company:companyToFind._id});
		//increment numberOfEmployee
		let x = parseInt(companyToFind.numberOfEmployees) + 1;
		//Update incremented numberOfEmployee in company data
		companyToFind = await companyModel.findOneAndUpdate({companyName} , {numberOfEmployees:x})
		res.status(200).json({status:true ,users, msg: "Created successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({status:false ,msg: "Internal Server Error"});
	}
}
