const express = require("express");

const mongoConnect = require("./utils/database");

const app = express();

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
