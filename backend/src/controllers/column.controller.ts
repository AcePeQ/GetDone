import { Request, Response } from "express";
import Column from "../models/column.model";
import Task from "../models/task.model";

export async function createColumn(req: Request, res: Response) {
  try {
    const { boardId, name, priority, color } = req.body;

    if (!boardId || !name.trim() || !color) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findColumn = await Column.findOne({ $and: [{ name }, { boardId }] });

    if (findColumn) {
      return res.status(400).json({ message: "Column already exists" });
    }

    const newColumn = new Column({
      boardId,
      name,
      position: priority,
      color,
    });

    await newColumn.save();

    res.status(200).json({ message: `Column: ${name} created successfully` });
  } catch (error) {
    console.error("Error in createColumn controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function editColumn(req: Request, res: Response) {
  try {
    const { boardId, columnId, name, priority, color } = req.body;

    if (!boardId || !columnId || !name.trim() || !color) {
      return res.status(400).json({ message: "All fields are required" });
    }

    await Column.findOneAndUpdate(
      {
        $and: [{ boardId, _id: columnId }],
      },
      {
        name,
        color,
        position: priority,
      }
    );

    res.status(200).json({ message: `Column: ${name} updated successfully` });
  } catch (error) {
    console.error("Error in editColumn controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteColumn(req: Request, res: Response) {
  try {
    const { boardId, columnId } = req.body;

    if (!boardId || !columnId) {
      return res.status(400).json({ message: "Invalid board or column" });
    }

    await Column.findOneAndDelete({
      $and: [{ _id: columnId }, { boardId }],
    });

    await Task.deleteMany({ columnId });

    res.status(200).json({ message: `Column deleted successfully` });
  } catch (error) {
    console.error("Error in deleteColumn controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
