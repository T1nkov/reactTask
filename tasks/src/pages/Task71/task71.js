import { useState, useEffect, useCallback } from "react";

function Task71() {
  const [arr, setArr] = useState([1, 2, 3, 4, 5]);

  const changeArr = useCallback(
    (curEl) => setArr(arr.filter((el) => el != curEl)),
    [arr]
  );

  return (
    <div>
      <p>
        Создайте компонент, который отображает список элементов с кнопками
        "Удалить". При нажатии на кнопку элемент должен быть удален из списка.
        Используйте useCallback, чтобы оптимизировать функцию удаления элемента
      </p>
      <div>
        {arr.map((curEl) => (
          <p>
            {curEl}
            <button onClick={() => changeArr(curEl)}>Delete</button>
          </p>
        ))}
      </div>
    </div>
  );
}

export default Task71;
