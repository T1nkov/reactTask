import { useReducer } from "react";

const reducer = (state, data) => {
  switch (data.action) {
    case "showInput":
      return data.value;

    default:
      break;
  }
};

function Task80() {
  const [input, dispatch] = useReducer(reducer, "");

  return (
    <div>
      <p>
        Создайте компонент отслеживающий вводимое значение в input. Результат
        отображать в h1
      </p>

      <h1>{input}</h1>
      <input
        type="text"
        onChange={(e) =>
          dispatch({ action: "showInput", value: e.target.value })
        }
      />
    </div>
  );
}

export default Task80;
