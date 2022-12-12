const express = require("express");
const { getAllContactData, postCompanyData,  searchData } = require("../controllers/companyControllers");
const router = express.Router();


router.route("/")
//gets company data in descending order
		.get(getAllContactData)
		//post company data 
		.post(postCompanyData)

router.route('/search')
//search company data in regex
.get(searchData)


module.exports = router;