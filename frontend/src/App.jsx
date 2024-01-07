import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/todos")
      .then((value) => {
        return value.json();
      })
      .then((data) => {
        setTodos(data.todos);
      });
  }, []);

  return (
    <>
      <CreateTodo todos={todos} setTodos={setTodos} />
      <Todos todos={todos} setTodos={setTodos} />
    </>
  );
}

export default App;
