const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    max: 20,
  },

  body: {
    type: String,
    max: 500,
  },

  category: {
    type: String,
  },
});

module.exports = Post = mongoose.model("post", PostSchema);
