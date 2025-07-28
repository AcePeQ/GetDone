import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { createColumn } from "../controllers/column.controller";

const router = express.Router();

router.post("/column", verifyToken, createColumn);

export default router;
