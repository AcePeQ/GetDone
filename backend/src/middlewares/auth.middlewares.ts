import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import User, { TUser } from "../models/user.model";

interface IExtendedJWTPayload extends jwt.JwtPayload {
  userId: string;
}

export interface AuthRequest extends Request {
  authUser: TUser;
}

export async function verifyToken(
  req: AuthRequest,
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

    const user = await User.findById(decoded.userId);

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
