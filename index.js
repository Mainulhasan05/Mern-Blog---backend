const express=require("express");
const app=express();
const dotenv=require("dotenv").config();
const PORT=process.env.PORT||5000;
const cors=require("cors")
const mongoose=require("mongoose");
const auth=require("./Routes/Auth/Login")
const postRoute=require("./Routes/Posts/Posts")
app.use(express.json());
app.use(cors())
app.use("/auth",auth)
app.use("/post",postRoute)

mongoose.connect(process.env.DB)
.then(()=>{
    console.log("Database Connected");
})
app.get("/",(req,res)=>{
    res.send("Hellooo");
})
app.listen(PORT,()=>{
    console.log("Server is listening on port "+PORT);
})




