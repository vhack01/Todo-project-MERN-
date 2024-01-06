import { useState } from "react";

const Todos = (props) => {
  const todos = props.todos;

  return (
    <>
      {todos.map((todo) => (
        <div id={todo._id}>
          <div>{todo.title}</div>
          <div>{todo.description}</div>
          <button>{todo.completed ? "Completed" : "Mark as done"}</button>
        </div>
      ))}
    </>
  );
};

export default Todos;
