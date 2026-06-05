import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, markCompleteTodo, deleteTodo } = useContext(TodoContext);

  return (
    <div className="flex flex-col items-center mt-5">
      {todos.map((t) => (
        <TodoItem
          key={t.id}
          todo={t}
          markCompleteTodo={markCompleteTodo}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;
