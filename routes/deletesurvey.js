const express = require("express");
const route = express.Router();

route.use(express.json());

const data = require("../models/Survey");//impoer survey as data
const cors = require("cors");
//route.use(cors());

// update data : PUT Method 
route.put("/getallsurvey/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        await data.updateOne({_id : req.params.id}, req.body);
        const survey =  await data.findOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            survey
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

// delete data : Delete Method 
route.delete("/getallsurvey/:id", async (req, res) => {
    // Write the ,code to fetch the data
    try{
        const survey = await data.deleteOne({_id : req.params.id});
        res.status(200).json({
            status: "Success",
            survey
        })
    }catch(e){
        res.status(500).json({
            status: "Failed",
            message: e.message
        })
    }
});

  
 

module.exports = route;