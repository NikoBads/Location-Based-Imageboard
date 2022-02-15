const mongoose = require("mongoose");
const Board = require("../models/Board.model");

const boards = [
  { title: "North America" },
  { title: "South America" },
  { title: "Europe" },
  { title: "Asia" },
  { title: "Africa" },
];

mongoose
  .connect("mongodb://localhost/localChan")
  .then((response) => {
    console.log(
      "connected to mongo database name: ",
      response.connections[0].name
    );
  })
  .catch((err) =>
    console.log("something went wrong connecting to database", err)
  );

Board.create(boards)
  .then((results) => {
    console.log("Saved the following boards successfully", results);
  })
  .catch((err) => {
    console.log("Something went wrong saving the seed files...", err);
  })
  .finally(() => {
    mongoose.connection.close();
  });
