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

    const findTask = await Task.findOne({ $and: [{ title }, { columnId }] });

    if (findTask) {
      return res.status(400).json({ message: "Task already exists" });
    }

    const newTask = new Task({
      columnId,
      title,
      description,
      priority,
      subTasks,
    });

    await newTask.save();

    res.status(200).json({ message: `Task: ${title} created` });
  } catch (error) {
    console.error("Error in addTask controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateTask(req: Request, res: Response) {
  try {
    const { taskId, columnId, subTasks } = req.body;

    if (!columnId || !subTasks) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedTask = await Task.findByIdAndUpdate(
      { _id: taskId },
      { subTasks, columnId }
    );

    if (!updatedTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: `Task: ${updateTask.name} updated` });
  } catch (error) {
    console.error("Error in addTask controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteTask(req: Request, res: Response) {
  try {
    const { taskId } = req.body;

    if (!taskId) {
      return res.status(400).json({ message: "Task not found" });
    }

    await Task.findOneAndDelete({ _id: taskId });

    res.status(200).json({ message: `Task: ${updateTask.name} deleted` });
  } catch (error) {
    console.error("Error in addTask controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
