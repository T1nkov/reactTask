import { useState } from "react";

function Task31() {
  const [color, setColor] = useState("black");
  const [flag, setFlag] = useState(false);

  const colors = ["red", "green", "black", "blue"];
  const changeColor = () => {
    setColor(colors[Math.round(Math.random() * colors.length)]);
    setFlag(flag ? false : true);
  };
  return (
    <div>
      <p>
        1. Создайте кнопку с названием "Добавить цвет". При клике на эту кнопку
        цвет шрифта заголовка H1 должен измениться. При следующем клике цвет
        должен вернуться в первоначальное состояние. Текст кнопки также должен
        меняться с "Открыто" на "Закрыто" при нажатии на саму кнопку.
      </p>
      <h1 style={{ color: color }}>TETXT</h1>
      <button onClick={changeColor}>{flag?'закрыто':'открыто'}</button>
    </div>
  );
}

export default Task31;
