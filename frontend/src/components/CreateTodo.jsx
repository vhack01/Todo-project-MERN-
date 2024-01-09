import { useState } from "react";
import avatar from "../assets/profile_sample.png";

const CreateTodo = (props) => {
  const { todos, setTodos } = props;

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleAddTodo() {
    if (title.trim().length > 0) {
      const result = await fetch("http://localhost:3000/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      const json = await result.json();
      setTodos([...todos, json.data]);
      setTitle("");
      setDescription("");
    }
  }

  return (
    <>
      <section className="createTodo">
        <div className="createTodo__profile">
          <img src={avatar} alt="" className="createTodo__profileImage" />
          <div className="createTodo__profileName">Lorem Ipsum</div>
          <div className="createTodo__profileUsername">
            Loremipsum@gmail.com
          </div>
        </div>

        {/* Add task */}

        <div className="createTodo__addTask">
          <div className="createTodo__addTask__title">Add new task</div>

          <fieldset className="createTodo__addTask__fieldset">
            <legend className="createTodo__addTask__fieldset__legend">
              Task Title
            </legend>
            <input
              type="text"
              name=""
              id=""
              placeholder="Task Title"
              className="createTodo__addTask__input"
              value={title}
              onChange={(e) => setTitle(e.currentTarget.value)}
            />
          </fieldset>

          <fieldset className="createTodo__addTask__fieldset">
            <legend className="createTodo__addTask__fieldset__legend">
              Due Date
            </legend>
            <input
              type="date"
              name=""
              id=""
              placeholder="Task Title"
              className="createTodo__addTask__input"
            />
          </fieldset>

          <fieldset className="createTodo__addTask__fieldset">
            <legend className="createTodo__addTask__fieldset__legend">
              Description
            </legend>
            <textarea
              placeholder="Type here..."
              className="createTodo__addTask__input"
              value={description}
              onChange={(e) => setDescription(e.currentTarget.value)}
            ></textarea>
          </fieldset>

          <button
            className="createTodo__addTask__addTodoBtn"
            onClick={handleAddTodo}
          >
            Create
          </button>
        </div>
      </section>
    </>
  );
};

export default CreateTodo;
