const express = require('express');
const router = express.Router();
const optionsController=require("../controllers/optionsController");

// to delete an option
router.delete("/:id/delete",optionsController.deleteOption)

// to increment vote
router.put("/:id/add_vote",optionsController.addVote)

module.exports=router;