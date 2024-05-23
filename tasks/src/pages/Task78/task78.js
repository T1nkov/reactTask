import { useReducer } from "react";

const reducer = (state, data) => {
  switch (data.action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return (state = 0);
    default:
      break;
  }
}

function Task78() {
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <p>
        Создайте компонент счетчика, который может увеличивать, уменьшать,
        сбрасывать значение при нажатии на соответствующие кнопки.
      </p>

      <h1>{count}</h1>

      <button onClick={() => dispatch({ action: "increment" })}>+1</button>
      <button onClick={() => dispatch({ action: "decrement" })}>-1</button>
      <button onClick={() => dispatch({ action: "reset" })}>0</button>
    </div>
  );
}

export default Task78;
