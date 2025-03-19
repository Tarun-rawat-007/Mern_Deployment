const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const userDemographicsRoutes = require("./routes/userDemographicsRoutes");
const serviceRoutes = require("./routes/serviceRoutes");


dotenv.config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());


app.use("/api/auth", authRoutes);
app.use("/api/profile", require("./routes/profileRoutes"));
app.use("/api/demographics", userDemographicsRoutes);
app.use("/api/admin", serviceRoutes);
app.use("/api/admin", require("./routes/adminRoutes"));



app.get("/", (req, res) => {
    res.json({ message: "Welcome to our Server" });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
