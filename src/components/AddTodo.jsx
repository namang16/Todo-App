import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";

function AddTodo() {
  const [inputTodo, setInputTodo] = useState("");
  const { addNewTodo, deleteAllTodo } = useContext(TodoContext);

  const addTodo = (e) => {
    e.preventDefault();
    if (!inputTodo) return;
    addNewTodo(inputTodo.trim());
    setInputTodo("");
  };

  return (
    <div
      className="p-3 flex justify-center items-center"
      style={{ backgroundColor: "#7fac00" }}
    >
      <form className="flex justify-center items-center w-full max-w-xl" onSubmit={addTodo}>
        <input
          type="text"
          className="bg-white p-2 mr-4 flex-1 min-w-0 rounded-xl"
          value={inputTodo}
          onChange={(e) => setInputTodo(e.target.value)}
          placeholder="Add New Todo Item"
        />
        <button
          type="submit"
          className="rounded-md"
          style={{ backgroundColor: "#cfff46" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2.5}
            stroke="currentColor"
            className="size-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </button>
      </form>
      <button
        type="submit"
        className="ml-4 p-1 rounded-md"
        style={{ backgroundColor: "#cfff46" }}
        onClick={(e) => {e.preventDefault(); deleteAllTodo();}}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          viewBox="0 0 24 24"
          className="w-5 h-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 6h18M8 6V4h8v2m-9 0l1 14h8l1-14"
          />
        </svg>
      </button>
    </div>
  );
}

export default AddTodo;
