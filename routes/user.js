const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

router.get("/", userController.all);
router.get("/:id", userController.get);
router.post("/", userController.create);

module.exports = router;
