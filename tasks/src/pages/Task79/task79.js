import { useReducer } from "react";

const reducer = (state, data) => {
  switch (data.action) {
    case "change flag":
      return state ? (state = false) : (state = true);

    default:
      break;
  }
};

function Task78() {
  const [flag, dispatch] = useReducer(reducer, true);
  return (
    <div>
      <p>
        Создайте компонент с текстом и кнопкой. Текст включает 2 состояния «on»
        и «off». По клику на кнопку текст меняется на противоположный
      </p>

      <>{flag ? <p>text</p> : <p></p>}</>
      <button onClick={() => dispatch({ action: "change flag" })}>
        {flag ? "on" : "off"}
      </button>
    </div>
  );
}

export default Task78;
