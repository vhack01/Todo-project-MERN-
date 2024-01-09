import {
  BiChevronRight,
  BiCircle,
  BiCoffeeTogo,
  BiEditAlt,
} from "react-icons/bi";
const Tasklist = (props) => {
  const { todo, setTodos } = props.values;

  async function handleDeleteTodo(id) {
    if (id) {
      const res = await fetch(`http://localhost:3000/todos/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      });
      const json = await res.json();
      console.log(json);
    }
  }

  return (
    <div key={todo._id} className="task-list">
      <div className="task-list__titleContainer1">
        <div>
          <BiCircle className="icon" />
        </div>
        <div className="task-list__titleContainer">
          <div className="task-list__title">{todo.title}</div>
          <div className="task-list__createDate">
            Created On: {todo.createdOn}
          </div>
        </div>
      </div>

      <div className="task-list__description">{todo.description}</div>

      <div className="task-list__action-btn-container">
        <div className="task-list__action-btn">
          <span>
            <BiEditAlt className="icon" />
          </span>
          <span onClick={(e) => handleDeleteTodo(todo._id)}>
            <BiCoffeeTogo className="icon" />
          </span>
        </div>
        <div>
          <span>
            <BiChevronRight className="icon" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Tasklist;
