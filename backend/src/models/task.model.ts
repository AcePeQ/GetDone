import mongoose from "mongoose";

export type TSubTask = {
  _id: mongoose.Types.ObjectId;
  title: string;
  isDone: boolean;
};

export type TTask = {
  _id: mongoose.Types.ObjectId;
  columnId: mongoose.Types.ObjectId;
  title: string;
  description: string;
  priority: number;
  subTasks: TSubTask[];
};

const subTaskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  isDone: { type: Boolean, required: true, default: false },
});

const taskSchema = new mongoose.Schema({
  columnId: { type: mongoose.Types.ObjectId, required: true, ref: "Column" },
  title: { type: String, required: true },
  description: { type: String, required: true },
  priority: { type: Number, required: true, default: 0 },
  subTasks: [subTaskSchema],
});

const Task = mongoose.model<TTask>("Task", taskSchema);

export default Task;
