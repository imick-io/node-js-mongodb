const express = require("express");

const errorController = require("./controllers/error.controller");
const userRoutes = require("./routes/user");

const mongoConnect = require("./utils/database");

const app = express();

// Parse body to json
app.use(express.json());

app.use("/users", userRoutes);
app.use(errorController.get404);

mongoConnect((client) => {
  console.log(client);
  app.listen(3000);
});
