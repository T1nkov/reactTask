import { useState } from "react";

function Task21() {
  const [state, setstate] = useState();

  function showInput(e) {
    setstate(e.target.value);
  }

  return (
    <div>
      <p>
        Создайте компонент с полем ввода и параграфом. При вводе данных в input
        отображать вводимое значение в параграф текущей страницы
      </p>
      <p>{state}</p>
      <input onChange={showInput} type="text" />
    </div>
  );
}

export default Task21;
