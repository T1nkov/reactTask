import { useState, useEffect, useCallback } from "react";

function Task72() {
  const [active, setActive] = useState(true);

  const activeP = useCallback(() => {
    setActive(active ? false : true);
  }, [active]);

  return (
    <div>
      <p>
        Создайте компонент, который имеет кнопку "Изменить статус". При каждом
        клике на кнопку статус компонента должен меняться между "Активный" и
        "Неактивный". Используйте useCallback, чтобы оптимизировать функцию
        изменения статуса.
      </p>
      <div>
        <button onClick={activeP}>click</button>
        {active ? <p>textfasd</p> : <p></p>}
      </div>
    </div>
  );
}

export default Task72;
