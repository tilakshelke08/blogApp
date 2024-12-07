// express instance 
const express = require("express");
const app = express();

//loading he .env file 
require("dotenv").config();

// port 
const PORT =process.env.PORT || 3000;

// middleware 
app.use(express.json());

// import 
const blog = require("./routes/blog");
// mount
app.use("/again/vlog",blog);

// import databsse 
const ConnectwithDb = require("./config/database");
// call databse function  for connectivity
ConnectwithDb();
// Server Started Successfully 
app.listen(PORT , () =>{
  console.log("Server Started succesfully ");
})
 

// default 
app.get ("/", (req,res) =>{
  res.send(`<h1>This is Default Home page </h1>`)
 
})