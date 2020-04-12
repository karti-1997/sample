const express = require("express");
const multer = require("multer");

const Post = require("../models/post");

const router = express.Router();

router.get("/:id", (req, res, next) => {
  Post.find({content:req.params.id}).then(documents => {
    res.status(200).json({
      message: "Posts fetched successfully!",
      posts: documents
    });
  });
});

module.exports = router;