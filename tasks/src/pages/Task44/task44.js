import { useState } from "react";

function Task44() {

  const [flag, setFlag] = useState(false);
  const getFlag = () => (!flag ? setFlag(true) : setFlag(false));
  return (
    <div>
      <p>
        2. Отображение текста с использованием useState: Создайте компонент,
        который предоставляет две кнопки: "Показать" и "Скрыть". При нажатии на
        "Показать" отображается текст, а при нажатии на "Скрыть" текст
        скрывается.
      </p>
      <div>
        {flag ?<p>sdgasdfdaafdfasdfa</p>  : <p></p>}
        <button onClick={getFlag}>{!flag ? "show" : "hide"}</button>
      </div>
    </div>
  );
}

export default Task44;
