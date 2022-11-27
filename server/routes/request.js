const router = require("express").Router();

const Post = require("../models/Post");

router.post("/", async (req, res) => {
  console.log(req.body);
  const { title, body, category } = req.body;

  const postField = {};

  if (title) postField.title = title;
  if (body) postField.body = body;
  if (category) postField.category = category;

  // Creating Post
  const newPost = new Post(postField);
  try {
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({
      msg: "Server Error",
    });
  }
});

module.exports = router;
