const mongoose = require("mongoose");

const ProjectUnitSchema = new mongoose.Schema(
  {
    unit: { type: String, required: true },
    size: { type: Number },
    cost: { type: Number },
    sale: { type: Number },
    salePrice: { type: Number },
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'Users'},
  },
  {
    timestamps: true,
  }
);

const ProjectUnits = mongoose.model("ProjectUnits", ProjectUnitSchema);

module.exports = ProjectUnits;
