import express from "express";
import { verifyToken } from "../middlewares/auth.middlewares";
import {
  createColumn,
  deleteColumn,
  editColumn,
} from "../controllers/column.controller";

const router = express.Router();

router.post("/column", verifyToken, createColumn);
router.put("/column", verifyToken, editColumn);
router.delete("/column", verifyToken, deleteColumn);

export default router;
