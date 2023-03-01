const express = require("express");
const router = express.Router();
const Question = require("../models/Questions");
const secret = "RESTAPI";
router.get("/createqstns", (req, res) => {
    res.send("Welcome to cretequestions api");
  });
router.post("/createqstns", async (req, res) => {
  try {
    console.log(req.body);

    const { question1, qstn1option, question2, qstn2option, question3, qstn3option} =
      req.body;

    const data = await Question.create({
        question1,
        qstn1option,
        question2,
        qstn2option,
        qstn2option,
        question3,
        qstn3option,
    });
    res.json({
      status: "success",
      message: "Questions with options inserted successfully",
      data,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});

///get

router.get("/getqstns", async (req, res) => {
  try {
    console.log(req.body);

    

    const data = await Question.find({}).sort({_id:-1}).limit(1)
    res.json({
      status: "success",
      message: "Questions fetched successfully",
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
