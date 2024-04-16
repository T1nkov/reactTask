import { useState } from "react";

function Task22() {
  const [state, setstate] = useState("");

  function changeInp(e) {
    setstate(e.target.value);
  }

  function isPalindrom() {
    if (state == state.split("").reverse().join("")) {
      alert(true);
    } else {
      alert(false);
    }
  }
  return (
    <div>
      <p>
        Создайте компонент с полем ввода и кнопкой. По клику на кнопку собрать
        данные из input и проверить вводимую строку на палиндром. Результат
        отображать в консоль
      </p>
    
      <input onChange={changeInp} type="text" />
      <button onClick={isPalindrom}>click</button>
    </div>
  );
}

export default Task22;
