const Post = require('../models/post');
exports.getAllPost=async (req,res)=>{
    const posts= await Post.find({});
    res.render("index",{
        posts
      });
}

exports.getPost=async(req,res)=>{
    const post= await Post.findById(req.params.id)
    res.render("post",{
        post
    });
}

exports.createPost=async (req,res)=>{
    console.log(req.body);
   await Post.create(req.body);
    res.redirect("/");
}

exports.updatePost=async (req, res) => {
    const post = await Post.findOne({_id:req.params.id});
    post.title=req.body.title;
    post.detail = req.body.detail
    post.save()
    res.redirect(`/posts/${req.params.id}`)
  }

exports.deletePost=async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    await Post.findByIdAndDelete(req.params.id);
    res.redirect('/');
  }