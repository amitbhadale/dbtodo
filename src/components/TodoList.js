import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { db, collection, getDocs } from "../firebaseConfig";

function TodoList({ anotherEvent }) {
  function deleteTodoDone() {
    getTodos();
  }
  async function getTodos() {
    const todoSnap = await getDocs(collection(db, "todos"));
    const todoList = todoSnap.docs.map((doc) => {
      return {
        id: doc.id,
        todo: doc.data(),
      };
    });
    setTodoArr(todoList);
  }
  const [todoArr, setTodoArr] = useState([]);
  useEffect(() => {
    getTodos();
  }, [anotherEvent]);
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <div className="app__todocontainer">
        {todoArr.map(({ id, todo }) => {
          const { name, status, dueDate } = todo;
          return (
            <TodoItem
              deleteTodoDone={deleteTodoDone}
              key={id}
              id={id}
              name={name}
              status={status}
              dueDate={dueDate}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TodoList;
