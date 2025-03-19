const express = require("express");
const router = express.Router();
const UserDemographics = require("../models/UserDemographics");

// GET user demographics data
router.get("/getdata", async (req, res) => {
  try {
    const data = await UserDemographics.findOne();
    if (!data) {
      return res.status(404).json({ message: "No demographics data found" });
    }
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
});

// POST - Initialize demographics data (Run once)
router.post("/initialize", async (req, res) => {
  try {
    const newData = new UserDemographics({
      males: req.body.males || 400,
      females: req.body.females || 300,
      children: req.body.children || 150,
    });

    await newData.save();
    res.status(201).json(newData);
  } catch (error) {
    res.status(500).json({ message: "Failed to initialize data", error });
  }
});

// PUT - Update demographics data
router.put("/", async (req, res) => {
  try {
    const updatedData = await UserDemographics.findOneAndUpdate(
      {},
      { males: req.body.males, females: req.body.females, children: req.body.children },
      { new: true, upsert: true }
    );

    res.json(updatedData);
  } catch (error) {
    res.status(500).json({ message: "Failed to update data", error });
  }
});

module.exports = router;
