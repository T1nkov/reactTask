import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task39() {
  const [num, setNum] = useState(0);

  const increment = () => {
    setNum(num + 1);
  };
  const decrement = () => {
    setNum(num + -1);
  };
  const reset = () => {
    setNum(0);
  };

  return (
    <div>
      <p>
        Создайте три кнопки с названиями: "+1", "-1", "Сброс". При нажатии на
        кнопку "+1" значение счётчика увеличивается на 1, при нажатии на кнопку
        "-1" значение счётчика уменьшается на 1, а при нажатии на кнопку "Сброс"
        значение счётчика обнуляется. Значение счетчика отображать в h1
      </p>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={reset}>reset</button>
        <button onClick={decrement}>-1</button>
      </div>
      <h1>{num}</h1>
    </div>
  );
}

export default Task39;
