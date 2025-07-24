import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { createUserBoard, userBoards } from "../controllers/board.controller";

const router = express.Router();

router.get("/boards", verifyToken, userBoards);
router.post("/userBoard", verifyToken, createUserBoard);

export default router;
