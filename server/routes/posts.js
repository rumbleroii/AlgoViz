const router = require("express").Router();

const Post = require("../models/Post");

router.get("/", async (req, res) => {
  const posts = await Post.find();
  res.send(posts);
});
module.exports = router;
