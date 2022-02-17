const router = require("express").Router();

const mongoose = require("mongoose");

const User = require("../models/User.model");
const Board = require("../models/Board.model");
const Post = require("../models/Post.model");
const axios = require("axios");
require("dotenv/config");
const isLoggedOut = require("../middleware/isLoggedOut");
const isLoggedIn = require("../middleware/isLoggedIn");
const res = require("express/lib/response");

router.get("/", isLoggedIn, (req, res) => {
  Board.find()
    .populate("posts")
    .then((results) => {
      //javascript logic to grab most recent posts
      res.render("boards/all-boards.hbs", { results });
    });
});

router.post("/clear/:id", (req, res) => {
  Board.findByIdAndUpdate(req.params.id, {
    posts: [],
  }).then((results) => {
    console.log(results);
    res.redirect("/boards");
  });
});

///test
// router.get("/test", (req, res) => {
// var ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
// var ip = "23.45.28.156";
// console.log(ip);
// res.json(ip);
//   axios
//     .get(
//       `https://geo.ipify.org/api/v2/country?apiKey=${process.env.IPACCESSKEY}&ipAddress=${ip}`
//     )
//     .then((results) => {
//       console.log(results.data);
//       res.json(results.data);
//     });
// });

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
      $push: { posts: { $each: [results._id], $position: 0 } },
    }).then((results) => {
      res.redirect("/boards/" + req.params.id);
    });
  });
});

module.exports = router;
