//how to do schema
const mongoose = require("mongoose"); //call package

const questionSchema = new mongoose.Schema(
  {
    question1: {
      type: String,
      require: true,
    },
    qstn1option: {
      type: String,
      require: true,
    },
    question2: {
      type: String,
      require: true,
    },
    qstn2option: {
      type: String,
      require: true,
    },
    question3: {
      type: String,
      require: true,
    },
    qstn3option: {
      type: String,
      require: true,
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
module.exports = mongoose.model("question", questionSchema);
