const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  icon: {
    type: String,
    required: [true, "Icon is required"],
  },
}, { timestamps: true });

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;
