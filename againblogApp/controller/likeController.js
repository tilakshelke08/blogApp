
exports.summer = (req,res) =>{
  res.send(`<h1> This is extra default page </h1>`);
}

// import
require("../model/likeModel");
require("../model/postModel");

exports.createLike = async(req,res) =>{
try{
  const {post,user} =req.body;

  const like = new Like({
    post,user,
  })

  const savedLike = await like.save();

  const updateLike =await post.findByIdAndUpdate(post ,{$push :{like:savedLike._id}}, {new:true}).populate("like").exec();
 res.json({
  post:updateLike,
 })

}catch(error){
  return res.status(500).json({
    error:" internal srever issue ",
  })
}
}

exports.deleteLike = async (req,res) =>{
  try{
// extract data 
    const {post,user} = req.body;
   const deleteLike = await Like.findOneAndDelete({post:post,_id:like})
 const updatedLike =await Post.findByIdAndDelete(post,{$pull :{like:deleteLike._id}},{new:true}).populate("like").exec();
    
  res.json({
    post: updatedLike,
  })
  }
catch(error)
  {
    return res.status(500).json({
      error:" internal error"
    })  }

}