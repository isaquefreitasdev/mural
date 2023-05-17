const express = require('express');
const router = express.Router()
const posts = require("../model/posts")
const app= express();
module.exports = app.use(express.json());


router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", (req, res) => {
  const { title, description } = req.body;
  posts.newPost(title, description);
  res.send("Post added successfully");
});

router.delete("/delete/:id", (req, res) => {
  const postId = req.params.id;
  const deleted = posts.deletePost(postId);

  if (deleted) {
    res.send(`Post with ID ${postId} deleted successfully`);
  } else {
    res.send(`Post with ID ${postId} not found`);
  }
});
module.exports = router