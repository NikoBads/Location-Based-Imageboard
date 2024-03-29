const { Schema, model } = require("mongoose");

const postSchema = new Schema(
  {
    imageURL: { type: String },
    comment: { type: String, maxlength: 450, required: true },
  },
  {
    timestamps: true,
  }
);

const Post = model("Post", postSchema);

module.exports = Post;
