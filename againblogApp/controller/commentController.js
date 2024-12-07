// import 

const Comment =require("../model/commentModel");
const Post =require("../model/postModel");

// decelare the function 
exports.firstComment = async (req,res) =>{
  try{
   const {post,body,user} = req.body;

   // creat the object 
   const comment = new  Comment({
    post,body,user

   })
   // store into the database
   const savedComment = await comment.save(); // it store only in database 
   
   // if you want  ref is also upadte then below one 


  const updateComment =await Post.findByIdAndUpdate(post,{$push:{comment:savedComment._id}},{new:true}).populate("Comments").exec();
  
   res.json({
    post:updateComment,
   })

  }catch(error){
    return res.status(500).json({
      error:" Internal server error ",
    })

  }
  }