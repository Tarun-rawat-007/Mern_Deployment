const express = require("express");
const Profile = require("../models/Profile");
const router = express.Router();

// Get profile details by email
router.get("/:email", async (req, res) => {
  try {
    const profile = await Profile.findOne({ email: req.params.email });
    if (!profile) return res.status(404).json({ message: "Profile not found" });
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

// Update profile details
router.post("/update", async (req, res) => {
  try {
    const { email, name, age, address } = req.body;
    let profile = await Profile.findOne({ email });

    if (!profile) {
      profile = new Profile({ email, name, age, address });
    } else {
      profile.name = name || profile.name;
      profile.age = age || profile.age;
      profile.address = address || profile.address;
    }

    await profile.save();
    res.json({ message: "Profile updated", profile });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
