const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 8080;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
//connection of database.
const mongoose = require("mongoose");
MongoDbURL = process.env.MONGODB_URL;
mongoose.connect(MongoDbURL);
var db = mongoose.connection;

db.on("error", console.error.bind(console, "Connection error : "));
db.once("open", function () {
  console.log("Database is Ready.... ");
});

app.use(express.json({ limit: "50mb" }));
//index route
app.get('/', (req, res) => {
  res.send("hello world!")
})

//company routes are here.
app.use("/api/company", require("./src/routes/companyRoutes"));
//employee routes are here.
app.use("/api/employee", require("./src/routes/employeeRoutes"));

app.listen(port, () => {
  console.log(`Your app listening at port ${port}`);
});