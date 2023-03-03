let express = require("express"),
  multer = require("multer"),
  mongoose = require("mongoose"),
  router = express.Router();
const { uuid } = require("uuidv4");
const DIR = "./public/";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, DIR);
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, uuid() + "-" + fileName);
  },
});
var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});
// User model
let Profile = require("../models/Profile");

router.post(
  "/user-profile",
  upload.single("profileImg"),
  async (req, res, next) => {
    const url = req.protocol + "://" + req.get("host");
    const exists = await Profile.findOne({ userid: req.body.uid });
    if (!exists) {
      const user = new Profile({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        profileImg: url + "/public/" + req.file.filename,
        userid: req.body.uid,
      });
      user
        .save()
        .then((result) => {
          res.status(201).json({
            message: "User added profile picture successfully!",
            userCreated: {
              _id: result._id,
              profileImg: result.profileImg,
            },
          });
        })
        .catch((err) => {
          console.log(err),
            res.status(500).json({
              error: err,
            });
        });
    } else {
      try {
        const response = await Profile.findOneAndUpdate(
          { userid: req.body.uid },
          { profileImg: url + "/public/" + req.file.filename }
        );
        res.json({
          status: "success",
          message: "Profile picture updated successfully",
        });
      } catch (e) {
        res.status(500).json({
          status: "Failed",
          message: e.message,
        });
      }
    }
  }
);

router.get("/profilepic/:q", async (req, res) => {
  try {
    const data = await Profile.find(
      { userid: req.params.q },
      { profileImg: 1, _id: 0 }
    );
    res.json({
      status: "success",
      message: "data fetched successfully",
      profileImg: data[0].profileImg,
    });
  } catch (e) {
    res.status(500).json({
      status: "Failed",
      message: e.message,
    });
  }
});
module.exports = router;
