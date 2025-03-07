require("dotenv").config();
const dbConnect = require("./config/dbConnect");
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const userRoutes = require("./routes/userRoutes");
const converterRoutes = require("./routes/converterRoutes");
const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.json({ message: "Welcome to my app." });
});

app.use("/api/users", userRoutes);
app.use("/api/conversions", converterRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
