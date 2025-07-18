import mongoose from "mongoose";

export type TColumn = {
  _id: mongoose.Types.ObjectId;
  boardId: mongoose.Types.ObjectId;
  name: string;
  position: number;
  color: string;
};

const columnSchema = new mongoose.Schema({
  boardId: { type: mongoose.Types.ObjectId, required: true, ref: "Board" },
  name: { type: String, required: true },
  position: { type: Number, required: true, default: 0 },
  color: { type: String, required: true, default: "white" },
});

columnSchema.virtual("tasks", {
  ref: "Task",
  localField: "_id",
  foreignField: "columnId",
});

columnSchema.set("toJSON", { virtuals: true });

const Column = mongoose.model<TColumn>("Column", columnSchema);

export default Column;
