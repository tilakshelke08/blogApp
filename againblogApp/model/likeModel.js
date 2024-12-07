// instance 
const mongoose=require("mongoose");

//route handler
const createLike = new mongoose.Schema({
  post:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Post",

  },
  user:{
    type:String,
    required:true,
  }
})
//export
module.exports =mongoose.model("Likes",createLike);

