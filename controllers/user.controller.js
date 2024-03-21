const User = require("../models/user");

exports.get = (req, res, next) => {
  const { id } = req.params;
  User.get(id)
    .then((user) => {
      res.status(200).json({
        user: user,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error fetching user",
      });
    });
};

exports.all = (req, res, next) => {
  User.all()
    .then((users) => {
      res.status(200).json({
        users: users,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error fetching users",
      });
    });
};

exports.create = (req, res, next) => {
  const { name, email } = req.body;
  const user = new User(name, email);
  user
    .create()
    .then((result) => {
      console.log(result);
      res.status(201).json({
        message: "User created",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        message: "Error creating user",
      });
    });
};
