import mongoose from "mongoose";

export type TBoard = {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  name: string;
};

const boardSchema = new mongoose.Schema({
  userId: { type: mongoose.Types.ObjectId, required: true, ref: "User" },
  name: { type: String, required: true, unique: true },
});

boardSchema.virtual("columns", {
  ref: "Column",
  localField: "_id",
  foreignField: "boardId",
});

boardSchema.set("toJSON", { virtuals: true });

const Board = mongoose.model<TBoard>("Board", boardSchema);

export default Board;
