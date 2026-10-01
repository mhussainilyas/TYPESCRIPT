import type { Request, Response } from "express";
import { TodoModel } from "../models/todo_model.ts";
import type { ApiResponse } from "../types/apiSuccessResponseType.ts";

const createTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { todoName } = req.body;

    if (!todoName) {
      res.status(400).json({
        success: false,
        message: "Please write your task!",
      } as ApiResponse<null>);

      return;
    }

    const newTodo = await TodoModel.create({ todoName: todoName });

    res.status(201).json({
      success: true,
      message: "Task created successfully!",
      data: newTodo,
    } as ApiResponse<typeof newTodo>);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    } as ApiResponse<null>);
  }
};

const getTodos = async (req: Request, res: Response): Promise<void> => {
  try {
    const allTodos = await TodoModel.find({});

    res.status(200).json({
      success: true,
      message: "Successfully fetched all tasks!",
      data: allTodos,
    } as ApiResponse<typeof allTodos>);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    } as ApiResponse<null>);
  }
};

const deleteTodo = async (req: Request, res: Response): Promise<void> => {
  try {
    const { todoId } = req.params;

    if (!todoId) {
      res.status(400).json({
        success: false,
        message: "Something went wrong during fetching ID!",
      } as ApiResponse<null>);
    }

    const deletedTodo = await TodoModel.findByIdAndDelete(todoId);

    res.status(200).json({
      success: true,
      message: "Task deleted successfully!",
    } as ApiResponse<null>);
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error!",
    } as ApiResponse<null>);
  }
};

export { createTodo, getTodos, deleteTodo };
