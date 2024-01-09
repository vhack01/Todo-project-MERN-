import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import Todos from "./components/Todos";
import Header from "./components/Header";
import "./App.css";
import TaskContext from "./contextAPI/TaskContext";

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
      <TaskContext value={{ todos, setTodos }}>
        <Header />
        <div className="main__container">
          <CreateTodo todos={todos} setTodos={setTodos} />
          <Todos todos={todos} setTodos={setTodos} />
        </div>
      </TaskContext>
    </>
  );
}

export default App;
