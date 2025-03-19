const express = require("express");
const Service = require("../models/Service");
const protect = require("../middleware/authMiddleware");

const router = express.Router();

// Middleware to check if user is admin
const admin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next();
    } else {
        res.status(403).json({ message: "Not authorized as admin" });
    }
};
// GET all services (Public)
router.get("/services",  async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// GET all services (Admin)
router.get("/services", protect, admin, async (req, res) => {
    try {
        const services = await Service.find();
        res.json(services);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// ADD a new service (Admin only)
router.post("/services", protect, admin, async (req, res) => {
    const { title, description, icon } = req.body;

    if (!title || !description || !icon) {
        return res.status(400).json({ message: "All fields are required" });
    }

    try {
        const newService = new Service({ title, description, icon });
        await newService.save();
        res.status(201).json(newService);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});



// DELETE a service (Admin only)
router.delete("/services/:id", protect, admin, async (req, res) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return res.status(404).json({ message: "Service not found" });

        await service.deleteOne();
        res.json({ message: "Service deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

module.exports = router;