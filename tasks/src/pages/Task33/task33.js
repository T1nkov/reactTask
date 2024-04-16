import { useState } from "react";

function Task33() {
  const [state, setState] = useState(0);

  const addNum = () => {
    setState(state + 1);
  };

  return (
    <div>
      <p>
        3. Разработайте компонент, который будет отслеживать количество кликов
        по кнопке и отображать это число.
      </p>
      <p>{state}</p>
      <button onClick={addNum}>click</button>
    </div>
  );
}

export default Task33;
