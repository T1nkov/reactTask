import { useState } from "react";

function Task35() {
  const [input, setInput] = useState({ name: "", surname: "", pass: "" });

  const setValueInput = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  return (
    <div>
      <p>
        5. Напишите компонент, который будет получать значения из двух полей
        ввода (input) и выводить их в консоль по нажатию на кнопку. Используйте
        для этого только один useState.
      </p>

      <input onChange={setValueInput} id="name" type="text" />
      <input onChange={setValueInput} id="surname" type="text" />
      <input onChange={setValueInput} id="pass" type="text" />

      <button onClick={() => console.log(input)}>Show in console</button>
    </div>
  );
}

export default Task35;
