const mongoose=require("mongoose");
const postSchema=new mongoose.Schema({
    author:{
        type:mongoose.Types.ObjectId,
        ref:"user"
    },
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    isChecked:{
        type:Boolean,
        required:true
    }
    
},{timestamps:true})

const Post=new mongoose.model("post",postSchema);
module.exports= Post