const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false },
  firstname: { type: String, required: false },
  lastname: { type: String, required: false },
});

module.exports = mongoose.model("User", userSchema);
