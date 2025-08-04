import { Request, Response } from "express";
import { clearJwtCookie, generateToken } from "../utils/auth.util";
import bcrypt from "bcrypt";
import User from "../models/user.model";

export async function login(req: Request, res: Response) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "Email and password fields are required" });
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      return res.status(404).json({ message: "Invalid credentials" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    generateToken(user._id, res);

    return res.status(200).json({
      _id: user._id,
      email: user.email,
      username: user.username,
    });
  } catch (error) {
    console.error("Error in login controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function register(req: Request, res: Response) {
  try {
    const { email, password, username } = req.body;
    const trimmingEmail = email.trim();
    const trimmingUsername = username.trim();

    if (!trimmingEmail || !password || !trimmingUsername) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!email.match(emailRegex)) {
      return res
        .status(400)
        .json({ message: "Invalid email format: example@gmail.com" });
    }

    const usernameRegex = /^[a-zA-Z0-9._%+-@]+$/;

    if (!username.match(usernameRegex)) {
      return res.status(400).json({ message: "Invalid username format" });
    }

    const findUser = await User.findOne({
      $or: [{ email: trimmingEmail }, { username: trimmingUsername }],
    });

    if (findUser) {
      return res.status(409).json({ message: "User already exists" });
    }

    const passwordRegex =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=[\]{};:'"\\|,.<>?~`]).{8,}$/;

    if (!password.match(passwordRegex)) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include at least one letter, one number, and one special character",
      });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email: trimmingEmail,
      password: hashedPassword,
      username: trimmingUsername,
    });
    await newUser.save();

    return res
      .status(201)
      .json({ message: `Account ${trimmingUsername} created successfully` });
  } catch (error) {
    console.error("Error in register controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function logout(_: Request, res: Response) {
  try {
    clearJwtCookie(res);
    res.status(200).json({ message: "Logout successfully" });
  } catch (error) {
    console.error("Error in logout controller:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}
