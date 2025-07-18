import { Request, Response } from "express";

export async function getUserBoards(req: Request, res: Response) {
  try {
    const authUser = req.authUser;
  } catch (error) {
    console.error("Error in getUserBoard controller: ", error);
    res.status(500).json({ message: "Interial server error" });
  }
}
