const Board = require("../models/Board.model");
const axios = require("axios");

const router = require("express").Router();

/* GET home page */
router.get("/", (req, res, next) => {
  // const ip = req.header("x-forwarded-for") || req.connection.remoteAddress;
  var ip = "23.45.28.156";

  axios
    .get(
      `https://geo.ipify.org/api/v2/country?apiKey=${process.env.IPACCESSKEY}&ipAddress=${ip}`
    )
    .then((results) => {
      console.log(results.data);
      Board.findOne({ country: results.data.location.country }).then(
        (foundBoard) => {
          res.redirect(`/boards/${foundBoard._id}`);
        }
      );
    });
  // if (req.session.user) {
  //   res.render("index");
  // }
});

module.exports = router;
