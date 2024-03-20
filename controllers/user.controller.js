const User = require("../models/user");

exports.all = (req, res, next) => {
  res.status(200).json({
    message: "All users",
  });
};

exports.create = (req, res, next) => {
  const { name, email } = req.body;
  const user = new User(name, email);
  user.create();
  res.status(201).json({
    message: "User created",
  });
};
