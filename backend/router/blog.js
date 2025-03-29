import express from "express";
import multer from "multer";
const router = express.Router();
const uploadMiddleware = multer({ dest: "uploads/" });
import fs, { stat } from "fs";
import { Post } from "../db/Schema.js";
import { authMiddleware } from "../middleware/middleware.js";

router.post(
  "/post",
  authMiddleware,
  uploadMiddleware.single("file"),
  async (req, res) => {
    const user_id = req.user;

    try {
      if (!req.file) {
        return res.status(400).json({ msg: "No file uploaded" });
      }

      const { originalname, path } = req.file;
      const { title, summery, content, status } = req.body;

      if ((!title || !summery || !content) && status === "published") {
        return res.status(400).json({ msg: "All fields are required" });
      }

      const extension = originalname.split(".").pop();
      const newPath = `${path}.${extension}`;

      try {
        fs.renameSync(path, newPath);
      } catch (fsError) {
        console.error("File renaming failed:", fsError);
        return res.status(500).json({ msg: "File processing error" });
      }

      const postDoc = await Post.create({
        title,
        summery,
        content,
        cover: newPath,
        author: user_id,
        status: status || "draft",
      });

      res.status(200).json({
        msg: "The Post Has been Created !!!",
        postDoc,
      });
    } catch (err) {
      console.error("Error creating post:", err);
      res.status(500).json({
        msg: "Internal Server Error",
        error: err.message,
      });
    }
  }
);

//@@ DESC : to update a particular post
//@@ Method:PUT
//@@ PUT/POST

router.put(
  "/post",
  authMiddleware,
  uploadMiddleware.single("file"),
  async (req, res) => {
    const user_id = req.user;
    let newPath = null;
    if (req.file) {
      const { originalname, path } = req.file;
      const extention = originalname.split(".")[1];
      // now need to rename the path file name
      newPath = path + "." + extention;
      fs.renameSync(path, newPath);
    }
    const { id, title, summery, content } = req.body;

    const postDoc = await Post.findById(id);
    const isAuthor =
      JSON.stringify(postDoc.author) === JSON.stringify(user_id._id);

    if (!isAuthor) {
      return res.status(401).json({
        msg: "you are not the Author, unauthorized access",
      });
    }

    await postDoc.updateOne({
      title,
      summery,
      content,
      cover: newPath ? newPath : postDoc.cover,
    });

    return res.status(200).json({
      msg: "Update Successfull",
      postDoc,
    });
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

//@@ GET/POST/:ID
//@@ DESC : Fetch post by post Id and return it

router.get("/post/:id", async (req, res) => {
  const { id } = req.params;

  const postDocs = await Post.findById(id).populate("author", [
    "firstname",
    "lastname",
  ]);
  if (postDocs) {
    return res.status(200).json(postDocs);
  }

  return res.status(401).json({
    msg: "something went wrong ",
  });
});

// @desc  Writer can see All Of his posts
//route   get /api/v1/blog/myposts
//@access private

router.get("/myposts", authMiddleware, async (req, res) => {
  const author = req.user._id;

  const writerPosts = await Post.find({ author: author }).populate("author", [
    "firstname",
    "lastname",
  ]);

  if (writerPosts) {
    return res.status(200).json(writerPosts);
  }
  return res.status(200).json({
    msg: "You did not Author any Post ...Thank You",
  });
});

// @desc  Writer can delete his posts
//route   delete /api/v1/blog/posts
//@access private

router.delete("/post/:postId", authMiddleware, async (req, res) => {
  try {
    const { postId } = req.params;
    const author = req.user._id;
    const postDoc = await Post.findById(postId);

    if (!postDoc) {
      return res.status(400).json({ msg: "post not found" });
    }

    if (!postDoc.author.equals(author)) {
      return res.status(403).json({
        msg: `you have not author this post , unauthorized access`,
      });
    }

    const response = await Post.deleteOne({ _id: postId });

    return res.status(200).json({
      msg: `post has been deleted successfully`,
      response,
    });
  } catch (error) {
    return res.status(500).json({
      msg: `internal error , something went wrong please try again later `,
    });
  }
});

// @desc  Writer can publish his draft posts
//route   patch /api/v1/blog/posts
//@access private

router.patch("/post/:id", authMiddleware, async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    if (!["draft", "published"].includes(status)) {
      return res.status(400).json({ msg: `invalid Status Code ` });
    }
    const postDoc = await Post.findById(id);
    if (!postDoc) {
      res.status(404).json({ msg: "post not found" });
    }
    if (postDoc) {
      postDoc.status = "published";
      await postDoc.save();

      return res.status(200).json({
        msg: "Your post has been successfully published",
        postDoc,
      });
    }
  } catch (err) {
    return res.status(500).json({
      msg: "error while updating post status ",
      err,
    });
  }
});

export default router;
