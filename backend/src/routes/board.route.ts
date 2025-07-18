import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { getUserBoards } from "../controllers/board.controller";

const router = express.Router();

router.get("/boards", verifyToken, getUserBoards);

export default router;
