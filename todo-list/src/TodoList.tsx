import { useState } from "react";

interface TodoListProps {
  todoList: string[];
  onDeleteTask: (index: number) => void;
}

export default function TodoList({ todoList, onDeleteTask }: TodoListProps) {
  const [check, setCheck] = useState(todoList.map(() => false));
  const handleCheck = (index: number) => {
    const newCheck = [...check];
    newCheck[index] = !newCheck[index];
    setCheck(newCheck);
  };

  return (
    <div>
      {todoList.map((item, idx) => (
        <div className="todo-item">
          <input type="checkbox" onChange={() => handleCheck(idx)} />
          <li style={check[idx] ? { textDecoration: "line-through" } : {}}>
            {item}
          </li>
          <button onClick={() => onDeleteTask(idx)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
