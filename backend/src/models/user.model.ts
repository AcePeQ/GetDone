import mongoose from "mongoose";

export type TUser = {
  _id: mongoose.Types.ObjectId;
  email: string;
  password: string;
  username: string;
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  username: { type: String, required: true, unique: true },
});

const User = mongoose.model<TUser>("User", userSchema);

export default User;
