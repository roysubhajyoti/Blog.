import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { URL } from "../config.js";
mongoose.connect(URL);
const UserSchema = new mongoose.Schema(
  {
    firstname: {
      type: String,
      require: true,
      maxLength: 30,
      lowercase: true,
    },
    lastname: {
      type: String,
      require: true,
      maxLength: 30,
      lowercase: true,
    },
    username: {
      type: String,
      require: true,
      minLength: 6,
      maxLength: 30,
      unique: true,
      trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      minLength: 8,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    summery: {
      type: String,
      require: true,
    },
    content: {
      type: String,
      require: true,
    },
    cover: {
      type: String,
    },
    author: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["draft", "published"],
      default: "draft",
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

export const User = mongoose.model("User", UserSchema);
export const Post = mongoose.model("Post", PostSchema);
