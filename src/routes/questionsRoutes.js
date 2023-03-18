const express=require("express");

const questionsController=require("../controllers/questionsController");

const router=express.Router();
// to get all the questions
router.get("/",questionsController.viewAllQuestion)

// to get a question
router.get("/:id",questionsController.viewQuestion)

// to create a question:- get the 'title' from req.body.title
router.post("/create",questionsController.createQuestion)

// to create an option:- get the 'text' from req.body.text
router.post("/:id/options/create",questionsController.addOption)

// to delete question
router.delete("/:id/delete",questionsController.deleteQuestion)

module.exports=router;