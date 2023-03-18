const mongoose = require('mongoose');

const optionSchema=new mongoose.Schema({
    question:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Question',
    },
    text:{
        type:String,
        required:true,
    },
    votes:{
        type:Number,
        required:true,
    },
    link_to_vote:{
        type:String,
        required:true,
    },
})

const Option=mongoose.model('Option',optionSchema);

module.exports=Option;