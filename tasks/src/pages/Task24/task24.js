import { useState } from "react";

function Task24() {
  const [state, setstate] = useState("");
  const [state1, setstate1] = useState("");

  function changeInp1(e) {
    setstate(e.target.value);
  }

  function changeInp2(e) {
    setstate1(e.target.value);
  }

  function isPalindrom() {
    alert(state1 == state);
  }
  return (
    <div>
      <p>
        . Создайте компонент с 2 полями ввода и кнопкой. По клику на кнопку
        собрать данные из двух input (2 разных state). Сравнить значения 2 input
        на равенство. Результат отображать в консоль
      </p>
      <input onChange={changeInp1} type="text" />
      <input onChange={changeInp2} type="text" />
      <button onClick={isPalindrom}>click</button>
    </div>
  );
}

export default Task24;
