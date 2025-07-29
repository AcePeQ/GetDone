import { Request, Response } from "express";
import Task from "../models/task.model";

export async function addTask(req: Request, res: Response) {
  try {
    const { columnId, title, description, priority, subTasks } = req.body;

    if (
      !columnId ||
      !title.trim() ||
      !description.trim() ||
      !priority ||
      !subTasks
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const findColumn = await Task.findOne({ $and: [{ title }, { columnId }] });

    if (findColumn) {
      return res
        .status(400)
        .json({ message: "Task with this name already exists" });
    }

    const newTask = new Task({
      columnId,
      title,
      description,
      priority,
      subTasks,
    });

    await newTask.save();

    res.status(200).json({ message: `Task: ${title} created sucessfully` });
  } catch (error) {
    console.error("Error in addTask controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
