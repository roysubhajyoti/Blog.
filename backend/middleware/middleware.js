import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config.js";
import { User } from "../db/Schema.js";

export const authMiddleware = async (req, res, next) => {
  console.log(`now in middleware auth before token `);

  const token = req.cookies?.jwt;
  console.log(token);

  if (!token) {
    return res.status(401).json({
      message: "Please login or try again later.",
    });
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = await User.findById(decoded.userId).select("-password");
    if (!req.user) {
      return res.status(401).json({
        message: "User not found. Please login again.",
      });
    }
    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Session expired. Please login again.",
      });
    }
    return res.status(401).json({
      message: "Invalid token. Please logout and try again.",
    });
  }
};
