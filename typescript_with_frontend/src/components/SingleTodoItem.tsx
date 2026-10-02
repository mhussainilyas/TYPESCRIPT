import React from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface SingleTodoData {
  data: {
    todoId: string;
    todoName: string;
    todoCreationDate: string;
    getAllTodosHandler: Function;
  };
}

function SingleTodoItem({ data }: SingleTodoData) {
  const { todoId, todoName, todoCreationDate, getAllTodosHandler } = data;

  const todoDate = new Date(todoCreationDate).toLocaleString();

  async function deleteTodoHandler(id: string): Promise<void> {
    const toastId = toast.loading("Deleting Task...");

    try {
      const response = await axios.delete(
        `http://localhost:7000/api/v1/delete-todo/${id}`,
      );

      toast.dismiss(toastId);
      toast.success(response.data?.message);
      getAllTodosHandler();
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error("Something went wrong!");
    }
  }

  return (
    <div className="flex justify-between items-center bg-neutral-900 p-4 rounded-xl border-l-4 border-orange-400">
      <div className="flex flex-col items-start gap-2">
        <p className="">{todoName}</p>
        <p className="text-[12px] text-white/40">{todoDate}</p>
        <p>{}</p>
      </div>
      <button
        onClick={() => deleteTodoHandler(todoId)}
        className="py-2 px-6 bg-red-700 font-semibold uppercase rounded-lg cursor-pointer hover:bg-red-800 transition-all duration-300 active:scale-97"
      >
        Delete
      </button>
    </div>
  );
}

export default SingleTodoItem;
