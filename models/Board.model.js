const { Schema, model } = require("mongoose");

const boardSchema = new Schema(
  {
    title: { type: String, required: true },
    posts: [{ type: Schema.Types.ObjectId, ref: "Post" }],
  },
  {
    timestamps: true,
  }
);

const Board = model("Board", boardSchema);

module.exports = Board;
