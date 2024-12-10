import { useState } from "react";
import TodoList from "./TodoList";

const DEFAULT_TASKS = ["Walk the dog", "Water the plants", "Wash the dishes"];

function App() {
  const [inputVal, setInputVal] = useState("");
  const [list, setList] = useState(DEFAULT_TASKS);

  const handleAdd = () => {
    if (inputVal === "") return;
    setList([...list, inputVal]);
    setInputVal("");
  };

  const handleDelete = (index: number) => {
    const newList = list.filter((_, idx) => idx !== index);
    setList(newList);
  };
  return (
    <div className="container">
      <input
        value={inputVal}
        type="text"
        name="input-todo"
        placeholder="Enter task here"
        className="input-todo"
        onChange={(e) => setInputVal(e.target.value)}
      />
      <button className="button-add" onClick={handleAdd}>
        Add
      </button>
      <TodoList todoList={list} onDeleteTask={handleDelete} />
    </div>
  );
}

export default App;
