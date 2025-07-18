import { Request, Response } from "express";
import Board from "../models/board.model";

export async function getUserBoards(req: Request, res: Response) {
  try {
    const userBoards = await Board.find({ userId: req.authUser?._id }).populate(
      {
        path: "columns",
        populate: {
          path: "tasks",
        },
      }
    );

    res.status(200).json(userBoards);
  } catch (error) {
    console.error("Error in getUserBoard controller: ", error);
    res.status(500).json({ message: "Interial server error" });
  }
}
