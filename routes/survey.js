const express = require("express");
const router = express.Router();
const Survey = require("../models/Survey");
const secret = "RESTAPI";

router.post("/creatsurvey", async (req, res) => {
  try {
    console.log(req.body);

    const { name, startdate, enddate, description, otherCriteria, surveyType,fileUploaded } =
      req.body;

    const data = await Survey.create({
      name,
      startdate,
      enddate,
      description,
      otherCriteria,
      surveyType,
      fileUploaded
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
