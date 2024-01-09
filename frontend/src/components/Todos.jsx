import Tasklist from "./Tasklist";

const Todos = (props) => {
  const { todos, setTodos } = props;
  const tag = 0;

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
      <div className="right-sidebar">
        <div className="filterbar">
          <h3>Task List</h3>
          <div className="filter-menu">
            <span
              className="filter-btn all-btn"
              style={{ backgroundColor: tag === 0 ? "#30a925" : "inherit" }}
            >
              All
            </span>
            <span className="filter-btn completed-btn">Completed</span>
            <span className="filter-btn uncompleted-btn">Pending</span>
          </div>
        </div>

        <div className="task-list-container">
          {todos.length > 0 ? (
            todos.map((todo) => (
              <Tasklist key={todo._id} values={{ todo, setTodos }} />
            ))
          ) : (
            <h1>No task found</h1>
          )}
        </div>
      </div>
    </>
  );
};

export default Todos;
