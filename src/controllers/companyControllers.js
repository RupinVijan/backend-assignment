const companyModel = require("../models/companyModel");


exports.getAllContactData = async (req,res) => {
	try
	{
		//gets company data in descending order
		const users = await companyModel.find().sort({'numberOfEmployees': -1});
		res.status(200).json({status:true ,users,  msg: "Found successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({status:false ,msg: "Internal Server Error"});
	}
}

exports.searchData = async (req,res) => {
	try
	{
		const companyName = req.query.name;
		//search data with regex in query
		const users = await companyModel.find({companyModel : { $regex : companyName , $options:'i' }});
		res.status(200).json({status:true ,users,  msg: "Found successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({status:false ,msg: "Internal Server Error"});
	}
}

exports.postCompanyData = async (req,res) => {
	try
	{
		//company data is post
		const users = await companyModel.create(req.body);
		res.status(200).json({status:false ,status:true ,users, msg: "created successfully" });
	}
	catch(err)
	{
		console.log(err);
		res.status(500).json({msg: "Internal Server Error"});
	}
}
