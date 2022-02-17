const mongoose = require("mongoose");
const Board = require("../models/Board.model");

////ADD "COUNTRY" INFO
const boards = [
  {
    title: "North America",
    country: ["ZZ", "US", "AS", "AQ", "AG", "CA", "MX"],
  },
  {
    title: "South America",
    country: ["AR", "BO", "BR", "CL", "CO", "EC", "SV", "GT", "HN", "HU"],
  },
  {
    title: "Europe",
    country: [
      "AX",
      "AL",
      "AD",
      "AI",
      "AW",
      "AT",
      "AZ",
      "BY",
      "BE",
      "BQ",
      "BA",
      "BV",
      "BG",
      "BF",
      "HR",
      "CY",
      "CZ",
      "DK",
      "EE",
      "FI",
      "FR",
      "GF",
      "PF",
      "TF",
      "GE",
      "DE",
      "GI",
      "GR",
      "GL",
      "GD",
      "GG",
      "VA",
      "HU",
      "IS",
      "IE",
      "IT",
      "JE",
      "LV",
      "LI",
      "LT",
      "LU",
    ],
  },
  {
    title: "Islands",
    country: [
      "BS",
      "BB",
      "BZ",
      "IO",
      "CV",
      "KY",
      "CX",
      "CC",
      "KM",
      "CK",
      "CR",
      "CU",
      "CW",
      "DM",
      "DO",
      "GQ",
      "FK",
      "FO",
      "FJ",
      "GP",
      "GU",
      "HT",
      "HM",
      "IM",
      "JM",
      "KI",
    ],
  },
  { title: "Australia", country: ["AU", ""] },
  {
    title: "Asia",
    country: [
      "AF",
      "AM",
      "BH",
      "BD",
      "BT",
      "BN",
      "BI",
      "KH",
      "CN",
      "HK",
      "IN",
      "ID",
      "IR",
      "IQ",
      "IL",
      "JP",
      "KZ",
      "KR",
      "KG",
      "LR",
      "LY",
      "MO",
    ],
  },
  {
    title: "Africa",
    country: [
      "DZ",
      "AO",
      "BJ",
      "BM",
      "BW",
      "CM",
      "CF",
      "TD",
      "CG",
      "CD",
      "CI",
      "DJ",
      "EG",
      "ER",
      "SZ",
      "ET",
      "GA",
      "GM",
      "GH",
      "GN",
      "GW",
      "GY",
      "JO",
      "KE",
      "KW",
      "LA",
      "LS",
      "LB",
    ],
  },
];

mongoose
  .connect(
    "mongodb+srv://NikoBads:NikoBads@cluster0.huus7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
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
