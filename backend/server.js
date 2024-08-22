import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import mainRouter from "./router/route.js";
const port = 3000;
const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", mainRouter);

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
