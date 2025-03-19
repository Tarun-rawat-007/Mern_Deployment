const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String },
  age: { type: Number },
  address: { type: String },
});

module.exports = mongoose.model("Profile", ProfileSchema);
