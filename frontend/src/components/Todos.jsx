const Todos = (props) => {
  const { todos, setTodos } = props;

  async function handleUpdateTodo(id) {
    const response = await fetch(`http://localhost:3000/completed/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
    });
    if (response.status === 200) {
      const json = await response.json();
      const index = todos.findIndex((todo) => todo._id === id);
      todos[index] = { ...json.data };
      console.log(todos);
      setTodos([...todos]);
    }
  }
  return (
    <>
      {todos.length > 0 ? (
        todos.map((todo) => (
          <div key={todo._id}>
            <div>{todo.title}</div>
            <div>{todo.description}</div>
            <button
              onClick={
                todo.completed ? null : (e) => handleUpdateTodo(todo._id)
              }
            >
              {todo.completed ? "Completed" : "Mark as done"}
            </button>
          </div>
        ))
      ) : (
        <h1>No task to do !!</h1>
      )}
    </>
  );
};

export default Todos;
