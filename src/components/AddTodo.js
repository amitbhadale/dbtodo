import React, { useState } from "react";
import { db, collection, addDoc } from "../firebaseConfig";

function AddTodo({ someEvnt }) {
  const [todoInput, settodoInput] = useState("");
  async function addTodo(e) {
    e.preventDefault();

    await addDoc(collection(db, "todos"), {
      name: todoInput,
      status: false,
    }).then(function () {
      settodoInput("");
      someEvnt();
      alert("Todo added");
    });
  }
  return (
    <div>
      <form>
        <input
          type="text"
          className="app__todoInput"
          value={todoInput}
          onChange={(e) => settodoInput(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </form>
    </div>
  );
}

export default AddTodo;
