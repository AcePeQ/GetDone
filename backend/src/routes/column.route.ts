import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import { createColumn, deleteColumn } from "../controllers/column.controller";

const router = express.Router();

router.post("/column", verifyToken, createColumn);
router.delete("/column", verifyToken, deleteColumn);

export default router;
