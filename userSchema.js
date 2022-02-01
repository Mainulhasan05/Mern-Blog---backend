const mongoose=require("mongoose");
const userSchema=new mongoose.Schema({
    first:{
        type:String,
        required:true
    },
    last:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
    imageUrl:{
        type:String,
        default:"https://www.pikpng.com/pngl/m/80-805068_my-profile-icon-blank-profile-picture-circle-clipart.png"
    },
},{timestamps:true})

const User=new mongoose.model("user",userSchema);
module.exports= User