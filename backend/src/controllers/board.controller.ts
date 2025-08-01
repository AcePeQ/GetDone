import { Request, Response } from "express";
import Board from "../models/board.model";

export async function userBoards(req: Request, res: Response) {
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
    console.error("Error in userBoards controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function createUserBoard(req: Request, res: Response) {
  try {
    const { name } = req.body;

    const trimmedName = name.trim();

    if (!trimmedName) {
      return res.status(400).json({ message: "Board name is required" });
    }

    const isBoardExists = await Board.findOne({
      $and: [{ userId: req.authUser?._id }, { name: trimmedName }],
    });

    if (isBoardExists) {
      return res.status(409).json({ message: "Board already exists" });
    }

    const newBoard = new Board({
      userId: req.authUser?._id,
      name: trimmedName,
    });

    await newBoard.save();

    res.status(200).json({ message: `Board: ${trimmedName} created` });
  } catch (error) {
    console.error("Error in creating user board controller: ", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
