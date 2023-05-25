const express = require("express");
const router = express.Router();
const posts = require("../model/posts");
const app = express();
module.exports = app.use(express.json());

router.get("/all", (req, res) => {
  res.json(posts.getAll());
});

router.post("/new", (req, res) => {
  const { title, description } = req.body;
  if (!title || !description) {
    res.status(400).json({ error: "Titulo e descrição vazios,preencha-os" });
  } else {
    posts.newPost(title, description);
    res.send("Post adicionado com sucesso");
  }
 
});
router.put("/update/:id", (req, res) => {
  const postId = req.params.id;
  const { title, description } = req.body;

  const success = posts.updatePost(postId, title, description);

  if (success) {
    res.status(200).json({ message: "Post atualizado com sucess" });
  } else {
    res.status(404).json({ error: "Post não encontrado" });
  }
});

router.delete("/delete/:id", (req, res) => {
  const postId = req.params.id;
  const deleted = posts.deletePost(postId);

  if (deleted) {
    res.send(`Post com ID ${postId} deletado com sucesso`);
  } else {
    res.send(`Post com ID ${postId} não encontrado`);
  }
});
module.exports = router;
