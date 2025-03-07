// Conversion.js
const mongoose = require("mongoose");

const conversionSchema = new mongoose.Schema({
  userId: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: "User",
    required: false
  },
  input: { type: String, required: true },
  binary: { type: String, required: true },
  octal: { type: String, required: true },
  hexadecimal: { type: String, required: true },
  decimal: { type: String, required: true },
  romanNumeral: { type: String, required: true }, 
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Conversion", conversionSchema);