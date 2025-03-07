const express = require("express");
const { saveConversion, getConversions, deleteConversion } = require("../controllers/controllerConverter");
const authMiddleware = require("../middleware/authmiddleware");

const router = express.Router();

router.post("/", authMiddleware, saveConversion); // Only logged-in users can save conversions
router.get("/", authMiddleware, getConversions); // Only logged-in users can see their conversions
router.delete("/:id", authMiddleware, deleteConversion); // Only logged-in users can delete their own conversions

module.exports = router;
