import { useEffect, useState } from "react";

function Task49() {
  const [state, setState] = useState("");

  useEffect(() => {
    console.log(`Input value: ${state}`);
  }, [state]);

  return (
    <div>
      <p>
        Форма ввода с использованием useState и useEffect: Создайте компонент
        React, который содержит форму с полем ввода. Используйте хук useState
        для хранения значения введенного текста и хук useEffect для отслеживания
        изменений этого значения. При каждом изменении значения в поле ввода,
        выводить его в консоль с помощью useEffect
      </p>
      <div>
        <input onChange={(e) => setState(e.target.value)} type="text" />
      </div>
    </div>
  );
}

export default Task49;
