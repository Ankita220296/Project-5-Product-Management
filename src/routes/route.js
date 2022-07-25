const express = require("express");
const router = express.Router();
const UserController = require("../controller/userController");
const validation = require("../validator/validation");

// test
router.get("/test", function (req, res) {
  res.send("My first api for checking the terminal");
});

router.post("/register",validation.validationForUser, UserController.registerUser);

router.all("/**", function (req, res) {
  res.status(404).send({
    status: false,
    msg: "The api you request is not available",
  });
});

module.exports = router;
