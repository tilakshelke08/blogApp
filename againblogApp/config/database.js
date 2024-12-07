// mongoose instance 
const mongoose = require("mongoose");

require("dotenv").config();
const ConnectwithDb = () =>{
mongoose.connect(process.env.DATABASE_URL,

 ).then( () =>{
  console.log("Db Conncetion Established !!!")
 }).catch( (error) =>{
  console.log("Dtabase Connection Failed !!!")
  console.lo(error.message);
  process.exit(1);
 })
  

}
module.exports =ConnectwithDb;