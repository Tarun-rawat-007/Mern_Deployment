const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const protect = require("../middleware/authMiddleware");
const { registerSchema, loginSchema } = require("../validations/authValidation");

const router = express.Router();

// ✅ REGISTER USER
router.post("/register", async (req, res) => {
  try {
    console.log("Incoming Request Body:", req.body);  // Debugging: Check incoming data

    // Validate input using Zod
    const validatedData = registerSchema.parse(req.body);

    // Check if user already exists
    const userExists = await User.findOne({ email: validatedData.email });
    if (userExists) return res.status(400).json({ message: "User already exists!" });

    // Hash password
    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    // Create user
    const user = await User.create({
      name: validatedData.name,
      email: validatedData.email,
      password: hashedPassword,
    });

    res.status(201).json({ message: "User Registered Successfully!" });
  } catch (error) {
    console.error("Validation Error:", error);
    res.status(400).json({ message: error.errors || "Invalid input data!" });
  }
});

// ✅ LOGIN USER
router.post("/login", async (req, res) => {
  try {
    // Validate input using Zod
    const validatedData = loginSchema.parse(req.body);

    // Find user
    const user = await User.findOne({ email: validatedData.email });
    if (!user) return res.status(400).json({ message: "User not found!" });

    // Check password
    const isMatch = await bcrypt.compare(validatedData.password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid Credentials!" });

    // Generate Token
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, isAdmin: user.isAdmin });
  } catch (error) {
    res.status(400).json({ message: error.errors || "Invalid input data!" });
  }
});

// ✅ ADMIN ROUTE (Protected)
router.get("/admin", protect, async (req, res) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: "Access Denied!" });

  res.json({ message: "Welcome Admin!" });
});


module.exports = router;
