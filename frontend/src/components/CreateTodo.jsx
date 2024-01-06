import { useState } from "react";

const CreateTodo = () => {
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
    }
  }

  return (
    <>
      <input
        type="text"
        name=""
        id=""
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.currentTarget.value)}
      />
      <input
        type="text"
        name=""
        id=""
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.currentTarget.value)}
      />

      <button onClick={handleAddTodo}>Add</button>
    </>
  );
};

export default CreateTodo;
