import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import axios from "axios";
import SingleTodoItem from "./components/SingleTodoItem";

function App() {
  const [task, setTask] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [todos, setTodos] = useState<any[]>([]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
    setTask(e.target.value);
  }

  async function createTodoHandler(): Promise<void> {
    const toastId = toast.loading("Adding todo...");

    const data = { todoName: task };

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:7000/api/v1/create-todo",
        data,
      );

      if (!response.data?.success) {
        throw new Error("Error occurs during creating new task!");
      }

      setTask("");
      setLoading(false);
      toast.dismiss(toastId);
      toast.success(response.data?.message);
      getAllTodosHandler();
    } catch (error) {
      console.error(error);
      toast.dismiss(toastId);
      toast.error("Something went wrong!");
    }
  }

  async function getAllTodosHandler(): Promise<void> {
    const toastId = toast.loading("Loading Todos...");

    try {
      setLoading(true);

      const response = await axios.get(
        "http://localhost:7000/api/v1/get-todos",
      );

      toast.dismiss(toastId);
      setLoading(false);
      setTodos(response.data?.data);
    } catch (error) {
      console.log(error);
      toast.dismiss(toastId);
      toast.error("Something went wrong!");
    }
  }

  useEffect(() => {
    getAllTodosHandler();
  }, []);

  return (
    <div className="w-full min-h-screen bg-neutral-950 text-white">
      <div className="w-175 mx-auto py-10 text-center">
        <h1 className="text-2xl font-bold border border-white/20 p-2 rounded-xl bg-white text-pink-700 uppercase">
          Todo Application
        </h1>

        <div className="w-full mt-10 flex gap-3">
          <input
            type="text"
            placeholder="Enter a new todo..."
            value={task}
            onChange={handleInputChange}
            className="border border-white/10 grow py-2 px-3 rounded-lg"
          />
          <button
            onClick={createTodoHandler}
            disabled={loading}
            className="py-2 px-6 bg-pink-700 font-semibold uppercase rounded-lg cursor-pointer hover:bg-pink-800 transition-all duration-300 active:scale-97"
          >
            Add
          </button>
        </div>

        <div className="mt-10 flex flex-col gap-4">
          {todos.map((todo, index) => (
            <div key={index}>
              <SingleTodoItem
                data={{
                  todoId: todo._id,
                  todoName: todo.todoName,
                  todoCreationDate: todo.createdAt,
                  getAllTodosHandler: getAllTodosHandler,
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
