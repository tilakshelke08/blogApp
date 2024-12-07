// instance 
const mongoose =require("mongoose");

//route handler
const createPost = new mongoose.Schema({
  title:{
type:String,
required:true,
  },
  body:{
type:String,
required:true,
  },
  like:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Likes",
  }],
  comment:[{
type:mongoose.Schema.Types.ObjectId,
ref:"Comments",

  }],
})

//export
module.exports =mongoose.model("Post",createPost);