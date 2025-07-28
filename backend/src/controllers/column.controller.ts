import { Request, Response } from "express";
import Column from "../models/column.model";

export async function createColumn(req: Request, res: Response) {
  try {
    const { boardId, name, priority, color } = req.body;

    if (!boardId || !name.trim() || !priority || !color) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findColumn = await Column.findOne({ $and: [{ name }, { boardId }] });

    if (findColumn) {
      return res
        .status(400)
        .json({ message: "Column with this name already exists" });
    }

    const newColumn = new Column({
      boardId,
      name,
      position: priority,
      color,
    });

    await newColumn.save();

    res.status(200).json({ message: "Column sucessfully created" });
  } catch (error) {
    console.error("Error in userBoards controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
