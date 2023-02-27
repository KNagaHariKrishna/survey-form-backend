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
},
{timestamps:true}
);
//timestamps created and updated at time
//Change didgit

//syntax for exports
module.exports=mongoose.model("user",userSchema)