const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    firstName: { type: String },
    lastName: { type: String },
    phone: { type: String },
    status: { type: String, default: "inactive" }, // active, inactive, blocked, deleted
    avatar: { type: Object },
    backgroundCover: { type: Object },
    role: { type: String, default: "investor" }, // admin, investor
    _token: { type: String },
  },
  {
    timestamps: true,
  }
);

const Users = mongoose.model("Users", UserSchema);

module.exports = Users;
