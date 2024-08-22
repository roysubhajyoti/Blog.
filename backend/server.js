import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import cookieParser from "cookie-parser";
import mainRouter from "./router/route.js";
const port = 3000;
const app = express();
// Create __dirname using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", mainRouter);
app.use("/uploads", express.static(path.join(__dirname, "/uploads")));
app.listen(port, () => {
  console.log(`server running on ${port}`);
});
