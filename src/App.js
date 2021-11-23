import { useState } from "react";
import "./App.css";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

function App() {
  const [tmp, setTmp] = useState(false);
  function anotherEvent() {
    setTmp(!tmp);
  }
  function someEvnt() {
    anotherEvent();
  }

  return (
    <div className="App">
      <h1 className="todo__header">Todo with Firebase</h1>
      <AddTodo someEvnt={someEvnt} />
      <TodoList anotherEvent={tmp} />
    </div>
  );
}

export default App;
