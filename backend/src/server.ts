import express from "express";
import env from "dotenv";
import connectDatabase from "./configs/db.config";
import cors from "cors";

env.config();
const PORT = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDatabase();
});
