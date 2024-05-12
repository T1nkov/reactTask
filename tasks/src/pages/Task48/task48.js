import { useState, useEffect } from "react";

function Task48() {
  const [timer, setTimer] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      timer === 60 ? setTimer(0) : setTimer(timer + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);
  return (
    <div>
      <p>
        Счетчик с использованием useState и useEffect: Создайте компонент
        счетчика, который увеличивает значение счетчика на 1 каждую секунду с
        использованием useEffect.
      </p>
      <h1>{timer}</h1>
    </div>
  );
}

export default Task48;
