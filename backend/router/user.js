import express from "express";
const router = express.Router();

import generateToken from "../utils/generateToken.js";
import z from "zod";

import { User } from "../db/Schema.js";

import { authMiddleware } from "../middleware/middleware.js";

// @desc  user can signup/Register
//route   POST /api/v1/user/signup
//@access public

const signUpZodSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
  firstname: z.string().max(30),
  lastname: z.string().max(30),
});

router.post("/signup", async (req, res) => {
  const body = req.body;
  const response = signUpZodSchema.safeParse(req.body);
  if (!response.success) {
    return res.status(400).json({
      message: "Invalid Input please check password/username",
    });
  }

  const findUser = await User.findOne({ username: req.body.username });

  if (findUser) {
    return res.status(411).json({
      message: "Username has been taken",
      username: findUser.username,
    });
  }

  const userCreate = await User.create({
    username: body.username,
    password: body.password, // Hashing the password,
    firstname: body.firstname,
    lastname: body.lastname,
  });

  const userId = userCreate._id;
  generateToken(res, userId);
  // console.log("token generated from signup");

  res.json({
    message: "New user added",
    _id: userId,
    username: userCreate.username,
    firstname: userCreate.firstname,
  });
});

// @desc  user can signin/Login
//route   POST /api/v1/user/signin
//@access public

const signInZodSchema = z.object({
  username: z.string().email(),
  password: z.string().min(8),
});

router.post("/signin", async (req, res) => {
  const body = req.body;
  const response = signInZodSchema.safeParse(req.body);
  if (!response.success) {
    return res.status(411).json({
      message: "invalid input",
    });
  }

  const findUser = await User.findOne({
    username: body.username,
  });

  if (findUser && (await findUser.matchPassword(body.password))) {
    generateToken(res, findUser._id);
    // console.log("token generated from signin");
    return res.status(200).json({
      msg: "successfull signin",
      _id: findUser._id,
      username: findUser.username,
      firstname: findUser.firstname,
      lastname: findUser.lastname,
    });
  }

  res.status(401).json({
    message: "username does not associated with any account",
  });
});
// @desc  user can logout
//route   POST /api/v1/user/logout
//@access private

router.post("/logout", (req, res) => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0),
  });
  return res.status(200).json({
    message: "User logged out ",
  });
});

// @desc  user can Update details of their profile
//route   put /api/v1/user/update
//@access private

const updateZodObject = z.object({
  password: z.string().min(8),
  firstName: z.string().max(30),
  lastName: z.string().max(30),
});
router.put("/update", authMiddleware, async (req, res) => {
  const user_id = req.user._id;

  const body = req.body;
  const response = updateZodObject.safeParse({
    password: body.password,
    firstName: body.firstname,
    lastName: body.lastname,
  });

  if (!response.success) {
    return res.status(411).json({
      message: "Error while updating information",
    });
  }

  const user = await User.findById(user_id);

  if (user) {
    const updateUserInfo = await User.updateOne(
      { _id: user_id },
      { firstname: body.firstname, lastname: body.lastname }
    );
    if (updateUserInfo) {
      return res.status(200).json({
        message: "Updated successfully",
        _id: user._id,
        firstname: user.firstname,
        lastname: user.lastname,
      });
    }
  } else {
    return res.status(401).json({
      message: "User does not exist",
    });
  }
});

export default router;
