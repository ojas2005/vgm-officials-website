const express = require("express");
const router = express.Router();
const ContactMessage = require("../models/contactMessage");

// POST /api/contact
router.post("/contact", async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    const newMessage = new ContactMessage({ name, email, subject, message });
    await newMessage.save();
    res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ success: false, error: "Failed to save message" });
  }
});

module.exports = router;
