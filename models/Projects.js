const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    // address: { type: String },
    // address2: { type: String },
    // country: { type: String },
    // city: { type: String },
    // zipcode: { type: String },
    // state: { type: String },
    // roi: { type: String },
    // duraction: { type: Number },
    status: { type: String, default: "inactive" }, // active, inactive,
    picture: { type: Object },
    gallery: { type: Array },
    // more info
    infoImages: { type: Array },
    investmentDate: { type: Date },
    investmentAmount: { type: Number },
    estimatedReturn: { type: Number },
    totalRoi: { type: Number },
    anualRoi: { type: Number },
    // detail
    cityProject: { type: mongoose.Schema.Types.ObjectId, ref: "ProjectCities" },
    area: { type: String },
    street: { type: String },
    cashReqForLotPurchase: { type: Number },
    loanForLotPurchase: { type: Number },
    // totalLotPurchasePrice: {type: Number},
    totalBildingCost: { type: Number },
    lotPurchaseLoanFinCost: { type: Number },
    constructionFinCost: { type: Number },
    // totalFinCost: {type:Number},
    softCost: { type: Number },
    additionalRequiredEquity: { type: Number },
    totalCashReqForProject: { type: Number },
    avgSalePricePerSqf: { type: Number },
    totalExpectedIncome: { type: Number },
    salesCommissionPercent: { type: Number }, // 0 to 100 %
    profitPerProject: { type: Number },
    profitPerProjectPercent: { type: Number },
    constructorSharePercent: { type: Number }, // 0 -> 100
    developerSharePercent: { type: Number }, // 0 -> 100
    totalCashOnCash: { type: Number },
    netCashOnCash: { type: Number },
    projectPeriodMonth: { type: Number },
    annualReturn: { type: Number },
    // units info
    units: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ProjectUnits",
      },
    ],
    // show dashboard
    flagDashboard: { type: Boolean, default: false },
    flagIndex: { type: Number, default: 1 },
    // user assigned project
    userAssigned: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    // user created
    createdBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
    updatedBy: { type: mongoose.Schema.Types.ObjectId, ref: "Users" },
  },
  {
    timestamps: true,
  }
);

const Projects = mongoose.model("Projects", ProjectSchema);

module.exports = Projects;
