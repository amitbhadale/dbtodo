import React from "react";
import { db, doc, deleteDoc } from "../firebaseConfig";

const TodoItem = ({ id, name, status, dueDate, deleteTodoDone }) => {
  async function deleteTodo(id) {
    await deleteDoc(doc(db, "todos", id)).then(
      alert("Doc deleted"),
      deleteTodoDone()
    );
  }
  return (
    <>
      <div className="app__todoItem">
        <h5>{name}</h5>
        <div className="todo__status">
          {status ? "Completed" : "not completed"}
        </div>
        <button onClick={() => deleteTodo(id)}>X</button>
      </div>
    </>
  );
};

export default TodoItem;
