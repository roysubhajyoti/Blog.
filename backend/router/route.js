import express from "express";
const router = express.Router();
import blogRouter from "./blog.js";
import userRouter from "./user.js";

router.use("/user", userRouter);
router.use("/blog", blogRouter);

export default router;
