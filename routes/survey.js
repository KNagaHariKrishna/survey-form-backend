const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey");
const secret = "RESTAPI";

router.post("/creatsurvey", async (req, res) => {
  try {
    console.log(req.body);

    const { selectedFile, name, startdate, enddate, desc, ocrit, surveytype } =
      req.body;

    const data = await Survey.create({
      selectedFile,
      name,
      startdate,
      enddate,
      ocrit,
      desc,
      surveytype,
    });
    res.json({
      status: "success",
      message: "Survey details insertion Successful",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

module.exports = router;
