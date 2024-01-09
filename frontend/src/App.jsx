import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import "./App.css";

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
      <Header />
      <div className="main__container">
        <CreateTodo todos={todos} setTodos={setTodos} />
        <Todos todos={todos} setTodos={setTodos} />
      </div>
    </>
  );
}

export default App;
