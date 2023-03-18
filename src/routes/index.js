const express=require("express");
const router=express.Router();

router.use("/questions",require('./questionsRoutes'));
router.use("/options",require('./optionsRoutes'));
module.exports=router;

