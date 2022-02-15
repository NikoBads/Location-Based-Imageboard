const router = require("express").Router();

const mongoose = require("mongoose");

const User = require("../models/User.model");
const Board = require("../models/Board.model");
const Post = require("../models/Post.model");

const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const res = require("express/lib/response");

router.get("/", (req, res) => {
  Board.find()
    .populate("posts")
    .then((results) => {
      res.render("boards/all-boards.hbs", { results });
    });
});

router.get("/:id", (req, res) => {
  Board.findById(req.params.id)
    .populate("posts")
    .then((results) => {
      res.render("boards/board", results);
    });
});

router.post("/:id/create-post", (req, res) => {
  Post.create({
    imageURL: req.body.imageURL,
    comment: req.body.comment,
  }).then((results) => {
    Board.findByIdAndUpdate(req.params.id, {
      $push: { posts: results._id },
    }).then((results) => {
      res.redirect("/boards/" + req.params.id);
    });
  });
});

module.exports = router;
