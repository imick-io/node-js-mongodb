const express = require("express");
const { port } = require("./config");

const errorController = require("./controllers/error.controller");
const userRoutes = require("./routes/user");

const { mongoConnect } = require("./utils/database");

const app = express();

// Parse body to json
app.use(express.json());

app.use("/users", userRoutes);
app.use(errorController.get404);

mongoConnect(() => {
  app.listen(port);
});
