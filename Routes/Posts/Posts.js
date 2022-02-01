const router=require("express").Router();
const Post=require("../../postSchema")
const Comments=require("../../commentsSchema")
router.post("/createPost",async(req,res)=>{
    if(req.body.author && req.body.title && req.body.description){
        const post=new Post(req.body);
        await post.save();
        res.json({msg:"Post created successfuly"});
    }
})
router.get("/getPost",async(req,res)=>{
    const posts=await Post.find({}).populate("author");
    res.status(200).json(posts);
})
router.get("/getPost/:id",async(req,res)=>{
    
    const posts=await Post.find({author:req.params.id}).populate("author");
    
    res.status(200).json(posts);
})

router.get("/getPostDetails/:id",async(req,res)=>{
    const postDetail=await Post.findOne({_id:req.params.id}).populate("author");
    
    res.status(200).json(postDetail);
})

router.get("/deletePost/:id",async(req,res)=>{
    
    const response=await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"deleted"});
})

router.post("/updatePost/:id",async(req,res)=>{
    
    const response=await Post.findByIdAndUpdate(req.params.id,{
        title:req.body.title,
        description:req.body.description,
        isChecked:req.body.isChecked
    });
    res.status(200).json({msg:"Successfully Updated"});
})

router.post("/makecomment",async(req,res)=>{
    if(req.body.author && req.body.postId && req.body.postComment){
        const comment=new Comments(req.body);
        await comment.save();
        const comments=await Comments.find({postId:req.body.postId}).populate("author");
    
            res.status(200).json(comments);
    }
    else{
        res.status(500).json({msg:"bad request"});
    }
})
router.get("/getComment/:postid",async(req,res)=>{
    try {
        if(req.params.postid!=null){
            const comments=await Comments.find({postId:req.params.postid}).populate("author");
    
            res.status(200).json(comments);
        }
        else{
            const blank=[]
            res.status(200).json(blank)
        }
    } catch (error) {
        
    }


})


router.get("/deleteComment/:commentId",async(req,res)=>{
    try {
        if(req.params.commentId!=null){
            const del=await Comments.findByIdAndDelete(req.params.commentId);
            
            const comments=await Comments.find({postId:del.postId}).populate("author");
    
            res.status(200).json(comments);
        }
        else{
            const blank=[]
            res.status(200).json(blank)
        }
    } catch (error) {
        
    }


})

router.get("/deletePost/:id",async(req,res)=>{
    
    const response=await Post.findByIdAndDelete(req.params.id)
    res.status(200).json({msg:"deleted"});
})

module.exports=router;