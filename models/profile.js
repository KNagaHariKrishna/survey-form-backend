//schema for profile
const mongoose = require("mongoose"); //call package

const profileSchema = new mongoose.Schema(
  {
    profileImg: {
      type: String
    },
    userid: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("profile", profileSchema);
