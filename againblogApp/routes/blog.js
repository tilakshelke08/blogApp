//instance
const express = require("express");
// router instance 
const router =express.Router();

//import
const {summer} =require("../controller/likeController");
router.get("/get",summer);

// import 
const {firstComment} =require("../controller/commentController");
router.post("/saveComment",firstComment);

// import 
const {createLike} =require("../controller/likeController");
router.post("/saveLike",createLike);

// import 
const {deleteLike} =require("../controller/likeController");
router.post("/deleteLike",deleteLike);

// import 
const {createPost} =require("../controller/postController");
router.post("/createPosted",createPost);

//import 
const {getAll} =require("../controller/postController");
router.get("/getOne",getAll);

// export 
module.exports = router;