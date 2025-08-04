import express from "express";
import env from "dotenv";
import connectDatabase from "./configs/db.config";
import cors from "cors";
import cookieParser from "cookie-parser";

import "./models/board.model";
import "./models/column.model";
import "./models/task.model";

import authRouter from "./routes/auth.route";
import boardRouter from "./routes/board.route";
import columnRouter from "./routes/column.route";
import taskRouter from "./routes/task.route";

env.config();
const PORT = process.env.PORT;

const app = express();

app.use(
  cors({
    origin: "https://getdone-fdl9.onrender.com",
    credentials: true,
  })
);
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);
app.use("/api/board", boardRouter);
app.use("/api/column", columnRouter);
app.use("/api/task", taskRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase();
});
