// express instance 
const express = require("express");
const app = express();

//loading he .env file 
require("dotenv").config();

// port 
PORT =process.env.DATABASE_URL || 3000;



// import databsse 
const ConnectwithDb = require("./config/database");
// call databse function  for connectivity
ConnectwithDb();
// Server Started Successfully 
app.listen(3000 , () =>{
  console.log("Server Started succesfully ");
})
 

// default 
app.get ("/", (req,res) =>{
  res.send(`<h1>This is Default Home page </h1>`)
 
})