import { useState } from "react";

function Task34() {
  const [text, setText] = useState();

  const showH1 = (e) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>
        4. Выводите каждое введенное значение из поля ввода (input) в заголовке
        H1.
      </p>
      <h1>{text}</h1>
      <input onChange={showH1} />
    </div>
  );
}

export default Task34;
