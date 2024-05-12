import { useState } from "react";

function Task45() {
  const colorsArr = ["red", "black", "pink", "blue"];

  const [color, setColor] = useState("purple");

  const takeColor = (e) => setColor(e.target.textContent);

  return (
    <div>
      <p style={{ background: `${color}` }}>
        Изменение цвета с использованием useState: Создайте компонент выбора
        цвета, который позволяет пользователю выбирать цвет из списка и
        отображает цвет выбранного цвета на экране.
      </p>
      <div onClick={takeColor}>
        {colorsArr.map((el,index) => (
          <button key={index}>{el}</button>
        ))}
      </div>
    </div>
  );
}

export default Task45;
