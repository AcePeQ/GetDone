import { Response } from "express";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";

export function generateToken(userId: mongoose.Types.ObjectId, res: Response) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;

    if (!JWT_SECRET) {
      throw new Error("Invalid JWT KEY");
    }

    const token = jwt.sign({ userId }, JWT_SECRET, {
      expiresIn: "7d",
    });

    const SEVEN_DAYS_IN_MILLISECONDS = 7 * 24 * 60 * 60 * 1000;

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: SEVEN_DAYS_IN_MILLISECONDS,
    });

    return token;
  } catch (error) {
    console.error(
      "Error in during genereting token in generateToken function:",
      error
    );
  }
}
