const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
require("dotenv").config();

const router = express.Router();

// User Registration
router.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    // Check if user already exists
    let user = await User.findOne({ username });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    user = new User({
      username,
      password: hashedPassword,
    });
    await user.save();

    // Generate JWT token
    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });

    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Server error", error });
  }
});

// User Login
router.post("/login", async (req, res) => {
    try {
      console.log("Login request received:", req.body);
  
      const { username, password } = req.body;
      const user = await User.findOne({ username });
  
      if (!user) {
        console.log("User not found");
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        console.log("Password does not match");
        return res.status(400).json({ message: "Invalid credentials" });
      }
  
      const payload = { id: user.id };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "1h" });
  
      console.log("Generated Token:", token);
      res.json({ token });
    } catch (error) {
      console.error("Login error:", error);
      res.status(500).json({ message: "Server error", error });
    }
});

module.exports = router;
