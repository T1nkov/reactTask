import { useState } from "react";

function Task46() {
  const [task, setTask] = useState(["do hw", "buy milk", "go sleep"]);
  const [input, setInput] = useState("");

  const deleteItem = (e) => {
    setTask(task.filter((el) => el !== e.target.id));
  };
  return (
    <div>
      <p>
        Список задач с использованием useState: Создайте компонент списка задач,
        который позволяет пользователю добавлять и удалять задачи из списка.
      </p>
      <div>
        {task.map((el, index) => (
          <>
            <p key={index}>{el}</p>
            <button id={el} onClick={deleteItem}>
              Delete task
            </button>
          </>
        ))}
        <input onChange={(e) => setInput(e.target.value)} type="text" />
        <button onClick={() => setTask([...task, input])}>Ok</button>
      </div>
    </div>
  );
}

export default Task46;
