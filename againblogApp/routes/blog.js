//instance
const express = require("express");
// router instance 
const router =express.Router();

//import
const {summer} =require("../controller/likeController");
router.get("/get",summer);


// export 
module.exports = router;