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
      {/* {todos.length > 0 ? (
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
      )} */}

      <div class="right-sidebar">
        <div class="filterbar">
          <h3>Task List</h3>
          <div class="filter-menu">
            <span class="filter-btn all-btn">All</span>
            <span class="filter-btn completed-btn">Completed</span>
            <span class="filter-btn uncompleted-btn">Pending</span>
          </div>
        </div>

        {/* <div class="task-list-container">
          <div class="task-list" id="task-id-2">
            <svg
              class="icon task--status"
              onclick="changeStatus(2)"
              style="fill : var(--color-primary)"
            >
              <use href="images/sprite.svg#taskdone"></use>
            </svg>
            <div class="task__title">
              <span class="task__title-name">undefined</span>
              <span class="task__title-date">undefined</span>
            </div>
            <p class="task__description">undefined</p>
            <div class="task-list__action-btn">
              <span
                class="icon-container icon--task-list-action"
                onclick="updateTask(2)"
              >
                <svg class="icon btn--edit-delete">
                  <use href="images/sprite.svg#edit"></use>
                </svg>
              </span>
              <span
                class="icon-container icon--task-list-action"
                onclick="deleteTask(2)"
              >
                <svg class="icon btn--edit-delete">
                  <use href="images/sprite.svg#delete"></use>
                </svg>
              </span>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default Todos;
