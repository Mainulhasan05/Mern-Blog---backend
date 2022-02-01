const mongoose=require("mongoose");
const commentsSchema=new mongoose.Schema({
    author:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    postId:{
        type:mongoose.Types.ObjectId,
        ref:"user",
        required:true
    },
    postComment:{
        type:String,
        required:true
    },
    
},{timestamps:true})

const Comments=new mongoose.model("comment",commentsSchema);
module.exports= Comments