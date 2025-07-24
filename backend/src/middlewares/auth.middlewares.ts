import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user.model";

declare global {
  namespace Express {
    interface Request {
      authUser?: typeof User.prototype;
    }
  }
}

interface IExtendedJWTPayload extends jwt.JwtPayload {
  userId: string;
}

export async function verifyToken(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const JWT_SECRET = process.env.JWT_SECRET;
    const token = req.cookies.jwt;

    if (!JWT_SECRET || !token) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const decoded = jwt.verify(token, JWT_SECRET) as IExtendedJWTPayload;

    if (!decoded || !decoded.userId) {
      return res.status(401).json({ message: "Unauthorized access" });
    }

    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    req.authUser = user;

    next();
  } catch (error) {
    console.error(
      "Erorr during verifing token in verifyToken middleware: ",
      error
    );
    res.status(500).json({ message: "Internal server error" });
  }
}
