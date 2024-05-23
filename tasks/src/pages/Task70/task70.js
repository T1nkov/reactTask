import { useState, useEffect, useCallback } from "react";

function Task70() {

  const [num, setNum]=  useState(0)
  const updateNum = useCallback(() => setNum(num + 1), [num])
  
  return (
    <div>
      <p>
        Создайте компонент с кнопкой "Увеличить счетчик". При каждом клике на
        кнопку счетчик должен увеличиваться на 1. Используйте useCallback, чтобы
        оптимизировать обработчик клика на кнопке.
      </p>
      <h1>{num}</h1>
      <button onClick={updateNum}>click</button>
    </div>
  );
}

export default Task70;
