const express = require("express");
const router = express.Router();
// Load model

const Post = require("../models/Post");

// Hiển thị các bài viết
router.get("/", async (req, res) => {
  const posts = await Post.find().lean().sort({ date: -1 });
  res.render("posts/index", { posts });
});

// Hiển thị form để tạo bài viết
router.get("/add", (req, res) => {
  res.render("posts/add");
});

router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, text } = req.body;
  let errors = [];
  if (!title) errors.push({ msg: "Title required" });
  if (!text) errors.push({ msg: "Text required" });
  if (errors.length > 0) res.render("posts/add", { title, text });
  else {
    const newPostData = { title, text };
    const newPost = new Post(newPostData);
    await newPost.save();
    res.redirect("/posts");
  }
});

// Hiển thị form để người dùng thay đổi bài viết
router.get("/edit/:id", async (req, res) => {
  const post = await Post.findOne({_id: req.params.id}).lean();
  res.render("posts/edit", { post });
});

// Cập nhật thay đổi bài viết vào database
router.put('/:id', async(req, res) => {
  const {title, text} = req.body
  await Post.findOneAndUpdate({_id: req.params.id}, {title, text})
  res.redirect('/posts')
})
// Xóa bài viết
router.delete('/:id', async(req, res) =>{
  await Post.findByIdAndRemove({_id : req.params.id})
  res.redirect('/posts')
})
module.exports = router;
