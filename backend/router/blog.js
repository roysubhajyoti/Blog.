import express from "express";
import multer from "multer";
const router = express.Router();
const uploadMiddleware = multer({ dest: "uploads/" });
import fs from "fs";
import { Post } from "../db/Schema.js";
import { authMiddleware } from "../middleware/middleware.js";

router.post(
  "/post",
  authMiddleware,
  uploadMiddleware.single("file"),
  async (req, res) => {
    const user_id = req.user;

    const { originalname, path } = req.file;
    const { title, summery, content } = req.body;
    const extention = originalname.split(".")[1];
    // now need to rename the path file name
    const newPath = path + "." + extention;
    fs.renameSync(path, newPath);

    const postDoc = await Post.create({
      title,
      summery,
      content,
      cover: newPath,
      author: user_id,
    });

    if (postDoc) {
      res.status(200).json({
        msg: "The Post Has been Created !!!",
        postDoc,
      });
    } else {
      return res.status(400).json({
        msg: "someyhing went Wrong",
      });
    }
  }
);

router.get("/post", async (req, res) => {
  const allPost = await Post.find()
    .populate("author", ["firstname", "lastname"])
    .sort({ createdAt: -1 }); // sort in desending order that is latest post will be on top
  if (allPost) {
    res.status(200).json(allPost);
  } else {
    res.status(400).json({
      msg: "something went wrong",
    });
  }
});

export default router;
