import express from "express";
import {
  createTodo,
  deleteTodo,
  getTodos,
} from "../controllers/todo_controller.ts";

const router = express.Router();

router.post("/create-todo", createTodo);

router.get("/get-todos", getTodos);

router.delete("/delete-todo/:todoId", deleteTodo);

export default router;
