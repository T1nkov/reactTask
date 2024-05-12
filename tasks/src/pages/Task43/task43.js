import { useState } from "react";

function Task43() {
  const [input, setInput] = useState("");
  return (
    <div>
      <p>
        Форма с использованием useState: Создайте компонент текстового поля,
        который позволяет пользователю по изменению значения инпута отображать
        значение в консоль
      </p>
      <p>{input}</p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </div>
  );
}

export default Task43;
