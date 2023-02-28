//how to do schema
const mongoose = require("mongoose"); //call package

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
  },
  email:{
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    unique: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  phone:{
    type:Number,
    require:true,
  },
  profession:{
    type:String,
    require:true,
  },
  confirmPassword:{
    type: String,
    require: true,
    unique: true,
  }
},
{timestamps:true}
);
//timestamps created and updated at time
//Change didgit

//syntax for exports
module.exports=mongoose.model("user",userSchema)