import { useCallback, useState } from "react";
import "./App.css";
import { Header, AddTodo, TodoList } from "./components";
import { TodoContext } from "./contexts/TodoContext";

function App() {
  const [todos, setTodos] = useState([]);
  const addNewTodo = useCallback(
    (todo) =>
      setTodos((prevTodos) => [
        ...prevTodos,
        { todo, id: Date.now(), completed: false },
      ]),
    [],
  );
  const markCompleteTodo = useCallback(
    (id) =>
      setTodos((prevTodos) =>
        prevTodos.map((t) => {
          if (t.id === id) {
            return { ...t, completed: !t.completed };
          }
          return t;
        }),
      ),
    [],
  );
  const deleteTodo = useCallback(
    (id) =>
      setTodos((prevTodos) =>
        prevTodos.filter((t) => t.id !== id),
      ),
    [],
  );

  return (
    <>
      <TodoContext.Provider value={{ todos, addNewTodo, markCompleteTodo, deleteTodo }}>
        <Header />
        <AddTodo />
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}

export default App;
