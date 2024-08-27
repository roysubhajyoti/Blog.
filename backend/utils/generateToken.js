import jwt from "jsonwebtoken";
import { JWT_SECRET, NODE_ENV } from "../config.js";
const generateToken = (res, userId) => {
  const token = jwt.sign({ userId }, JWT_SECRET, {
    expiresIn: "30d",
  });

  // console.log(` jwttoken before cookie -- > ${token}`);

  res.cookie("jwt", token, {
    httpOnly: true,
    secure: NODE_ENV !== "development",
    sameSite: "lax",
    maxAge: 30 * 24 * 60 * 60 * 1000,
  });
  // console.log(`Set-Cookie header: ${res.get("Set-Cookie")}`);
};

export default generateToken;
