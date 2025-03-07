"use strict";
const Mongoose = require("mongoose");
// if the connection fails, try 127.0.0.1 instead of
const uri = process.env.DB_URI || "mongodb://localhost/mini_Project_3DB";
// Connect to MongoDB
Mongoose.connect(uri)
  .then(() => console.log("MongoDB Connected"))
  .catch((error) => console.log("MongoDB Error:" + error.message));
// Get the default connection
const db = Mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
exports.Mongoose = Mongoose;
