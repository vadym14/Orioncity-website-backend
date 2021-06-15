const mongoose = require("mongoose");

const ProjectCitySchema = new mongoose.Schema(
  {
    country: { type: String, require: true },
    state: { type: String, require: true },
    city: { type: String, require: true },
    description: { type: String },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

const ProjectCities = mongoose.model("ProjectCities", ProjectCitySchema);

module.exports = ProjectCities;
