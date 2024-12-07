
const express = require("express");
const app = express();

app.listen(3000 , () =>{
  console.log("server started succesfully ");
})

app.get ("/", (req,res) =>{
  res.send(`<h1>***"SukhSagar"***</br>
     "Shivaji Shelke" </br> "Indumati Shelke" </br> "Jitesh Shelke" </br> "Tilak Shelke"</h1>`),
  res.send(`<h1> "Shivaji Shelke" </h1>`),
  res.send(`<h1> </h1>`),
  res.send(`<h1>  </h1>`),
  res.send(`<h1>  </h1>`)
})