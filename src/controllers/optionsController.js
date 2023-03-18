const Question = require("../models/question")
const Option = require("../models/option")
// to delete an option
const deleteOption=async(req,res)=>{
    try{
        // getting id and then deleting from Option databse and Question database
       let optionId=req.params.id;
       await Option.findByIdAndDelete(optionId).then(async(option)=>{
        let questionId=option.question;
        await Question.findByIdAndUpdate(questionId,{
         $pull:{options:optionId}
        });
       });
       
       return res.status(200).json({
        message:"Option deleted successfully"
       })
    }catch(error){
        return res.status(400).json({
            message:`can't delete option:${error}`
        });
    }
}


// increment count of votes
const addVote=async(req,res)=>{
   try{
    // getting option id then updating votes in it
      let optionId=req.params.id;
      let votes=(await Option.findById(optionId)).votes;
    //   incrementing votes
      votes++;
    //   updating votes
    await Option.findByIdAndUpdate(optionId,{votes:votes});
    return res.status(200).json({
        message:"votes updated"
    })

   }catch(error){
        return res.status(400).json({
            message:`can't update votes:${error}`
        });
    }
}

module.exports={
    addVote,
    deleteOption,
}

