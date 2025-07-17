import express from "express";
import env from "dotenv";
import connectDatabase from "./configs/db.config";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRouter from "./routes/auth.route";

env.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase();
});
