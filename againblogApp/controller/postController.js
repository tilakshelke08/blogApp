// import 
require("../model/postModel");


exports.createPost = async( req,res)=>{
  try{
  const {title, body} =req.body;

  const post = new Post({
    title,body,

  })
  const createOne = await post.save();

  res.json({
    post:createOne,
  })
} catch(error){
  return res.status(500).json({
    error:"internal error ",
  })
}
} 
exports.getAll = async( req,res)=>{
  try{
 const posts =await Post.find().populate("like").populate("comment").exec();
  res.json({
    post:posts,
  })
} catch(error){
  return res.status(500).json({
    error:"internal error ",
  })
}
} 