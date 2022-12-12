const express = require("express");
const { getAllTokenData, postEmployeeData } = require("../controllers/employeeControllers");
const router = express.Router();


router.route("/")
//search employee by company name
		.get(getAllTokenData)
		//post employee data
		.post(postEmployeeData)


module.exports = router;