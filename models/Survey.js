//how to do schema
const mongoose = require("mongoose"); //call package

const surveySchema = new mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  startdate:{
    type: String,
    require: true
  },
  enddate: {
    type: String,
    require: true
  },
  otherCriteria: {
    type: String,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  surveyType: {
    type: String,
    require: true
  },
  fileUploaded: {
    type: String
  },
  userid: {
    type: String,
    
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}
);
module.exports=mongoose.model("survey",surveySchema)