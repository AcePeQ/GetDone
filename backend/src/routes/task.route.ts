import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { addTask, updateTask } from "../controllers/task.controller";

const router = express.Router();

router.post("/task", verifyToken, addTask);
router.put("/task", verifyToken, updateTask);

export default router;
