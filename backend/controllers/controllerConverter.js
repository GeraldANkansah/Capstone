// controllerConverter.js
const Conversion = require("../models/Conversion");
const jwt = require("jsonwebtoken");

// Function to convert number to Roman Numerals
const toRoman = (num) => {
  const romanMap = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  let result = "";
  for (let key in romanMap) {
    while (num >= romanMap[key]) {
      result += key;
      num -= romanMap[key];
    }
  }
  return result;
};

const saveConversion = async (req, res) => {
    try {
      console.log("Incoming request body:", req.body); 
      console.log("Authenticated User ID:", req.user?.id); 

      const { input, customBase } = req.body;
      const userId = req.user ? req.user.id : null;

      if (!userId) {
        console.error("❌ ERROR: User ID is missing from request.");
        return res.status(401).json({ message: "Unauthorized: No user ID found" });
      }

      const num = parseInt(input);
      if (isNaN(num) || num <= 0 || num > 3999) {
        console.error("❌ ERROR: Invalid number input:", input);
        return res.status(400).json({ message: "Invalid number input" });
      }

      const binary = num.toString(2);
      const octal = num.toString(8);
      const hexadecimal = num.toString(16).toUpperCase();
      const decimal = num.toString(10);
      const romanNumeral = toRoman(num);
      const customBaseValue = customBase ? num.toString(customBase) : "N/A";

      console.log("✅ Saving conversion:", { input, binary, octal, hexadecimal, decimal, romanNumeral, customBaseValue });

      const newConversion = new Conversion({
        userId,
        input,
        binary,
        octal,
        hexadecimal,
        decimal,
        romanNumeral,
        customBase: customBaseValue,
      });

      await newConversion.save();
      console.log("✅ Conversion saved successfully!");

      res.status(201).json({ message: "Conversion saved", conversion: newConversion });
    } catch (error) {
      console.error("❌ SERVER ERROR:", error); // Log error to console
      res.status(500).json({ message: "Server error", error: error.message || error });
    }
};

const getConversions = async (req, res) => {
    try {
      const userId = req.user.id;
      const conversions = await Conversion.find({ userId }); // Filter by user ID
      res.status(200).json(conversions);
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
};


const deleteConversion = async (req, res) => {
    try {
      const { id } = req.params;
      const userId = req.user.id;
      
      const conversion = await Conversion.findOne({ _id: id, userId });
      if (!conversion) {
        return res.status(404).json({ message: "Conversion not found" });
      }

      await Conversion.findByIdAndDelete(id);
      res.status(200).json({ message: "Conversion deleted" });
    } catch (error) {
      res.status(500).json({ message: "Server error", error });
    }
};

module.exports = { saveConversion, getConversions, deleteConversion };
