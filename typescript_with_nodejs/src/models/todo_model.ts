import mongoose from "mongoose";
import type { Document } from "mongoose";

interface TodoSchema extends Document {
  todoName: string;
}

const todoSchema = new mongoose.Schema<TodoSchema>(
  {
    todoName: {
      type: String,
      trim: true,
      required: true,
    },
  },
  { timestamps: true },
);

export const TodoModel = mongoose.model<TodoSchema>("Todo", todoSchema);
