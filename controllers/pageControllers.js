const Post = require('../models/post');
exports.getAboutPage=(req,res)=>{
    res.render("about");
}

exports.getAddPostPage=(req,res)=>{
    res.render("add_post");
}
exports.getPostPage=(req,res)=>{
    res.render("post");
}
exports.getEditPage= async (req, res) => {
    const post = await Post.findOne({ _id: req.params.id });
    res.render('edit', {
      post,
    });
  }