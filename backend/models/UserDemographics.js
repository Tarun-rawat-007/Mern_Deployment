const mongoose = require("mongoose");

const userDemographicsSchema = new mongoose.Schema({
  males: { type: Number, required: true },
  females: { type: Number, required: true },
  children: { type: Number, required: true },
});

module.exports = mongoose.model("UserDemographics", userDemographicsSchema);
