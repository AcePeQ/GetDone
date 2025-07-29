import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { addTask } from "../controllers/task.controller";

const router = express.Router();

router.post("/task", verifyToken, addTask);

export default router;
