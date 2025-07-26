import { Request, Response } from "express";

export async function createColumn(req: Request, res: Response) {
  try {
    const { boardId, name, priority, color } = req.body;
  } catch (error) {
    console.error("Error in userBoards controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
