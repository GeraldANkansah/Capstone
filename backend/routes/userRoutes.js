const express = require("express");
const Controllers = require("../controllers")

const router = express.Router();

router.post("/login", (req, res) => {Controllers.userController.loginUser(req,res); });
router.post("/register", (req, res) => { Controllers.userController.registerUser(req, res); });
router.get("/", (req, res) => { Controllers.userController.getAllUsers(req, res); });
module.exports = router;
