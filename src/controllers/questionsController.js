const Question = require("../models/question")
const Option = require("../models/option")
// to create a question
const createQuestion=async(req,res)=>{
    try{
        // getting title from body then creating question in db
      await Question.create({
        title: req.body.title,
      })
      return res.status(200).json({
        message:'Question created successfully!!'
      })
    }catch(error){
        return res.status(400).json({
            message:`can't create question:${error}`
        });
    }
}

// to add options
const addOption=async(req,res)=>{
    try{
        // getting question id then creating option 
       let questionId=req.params.id;
       let question=await Question.findById(questionId);

       let option=await Option.create({
        question:questionId,
        text:req.body.text,
        votes:0,
        link_to_vote:"#"
       });
    //   updating link_to_vote
       let link_to_vote=`https://localhost:8000/options/${option.id}/add_vote`;
       await Option.findByIdAndUpdate(option.id,{link_to_vote:link_to_vote});

    //    saving in that question in db
       question.options.push(option);
       question.save();

       return res.status(200).json({
        message:"option added successfully"
       });
    }catch(error){
        return res.status(400).json({
            message:`can't add option:${error}`
        });
    }
}

// to delete a question
const deleteQuestion=(req,res)=>{
    try{
        // getting question id then deleting it and deleting its options
        let questionId = req.params.id
        Question.findByIdAndDelete(questionId).then(async(question)=>{
             await Option.deleteMany({question:questionId});
             return res.status(200).json({
                message:'Question and associated options have been deleted!'
             })
        })
        
    }catch(error){
        return res.status(400).json({
            message:`can't delete question:${error}`
        });
    }
}




// to view a question and its options
const viewQuestion=async(req,res)=>{
    try{
        // getting the question by id from db
       let question=await Question.findById(req.params.id).populate('options');
       return res.status(200).json({
        question:question
       })
    }catch(error){
        return res.status(400).json({
            message:`can't fetch question:${error}`
        });
    }
}

const viewAllQuestion=async(req,res)=>{
    try{
        // getting all the questions
        let questions=await Question.find({}).populate('options');
        return res.status(200).json({
            questions:questions
        });
    }catch(error){
        return res.status(400).json({
            message:`can't fetch questions:${error}`
        });
    }
}


module.exports={
    viewAllQuestion,
    viewQuestion,
    deleteQuestion,
    createQuestion,
    addOption
}

