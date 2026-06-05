import React from "react";

function TodoItem({ todo, markCompleteTodo, deleteTodo }) {
  return (
    <div
      className={`flex justify-between items-center mb-4 border-2 border-white bg-white rounded-xl shadow-xl p-3 mr-2 max-w-2xl w-full transition-opacity duration-300 ${todo.completed ? "opacity-60" : ""}`}
    >
      <div className={`flex items-center`}>
        <label class="flex items-center cursor-pointer">
          <input
            type="checkbox"
            class="peer sr-only"
            checked={todo.completed}
            onChange={() => markCompleteTodo(todo.id)}
          />

          <div
            class="w-6 h-6 rounded-md shadow-md border-2 border-gray-200
           flex items-center justify-center"
          >
            <svg
              class="w-5 h-5 text-black"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="3"
            >
              <path
                d="M5 13l4 4L19 7"
                class="check-path peer-checked:stroke-black"
              />
            </svg>
          </div>
        </label>

        <span
          className={`pl-4 word-break ${todo.completed ? "line-through" : ""}`}
        >
          {todo.todo}
        </span>
      </div>

      <button
        type="submit"
        hidden={!todo.completed}
        onClick={(e) => {
          e.preventDefault();
          deleteTodo(todo.id);
        }}
      >
        <svg
          className="w-5 h-5 text-red-500 cursor-pointer opacity-100"
          fill="none"
          stroke="currentColor"
          stroke-width="2.5"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>
  );
}

export default React.memo(TodoItem);
