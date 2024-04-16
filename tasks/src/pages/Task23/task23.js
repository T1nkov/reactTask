import { useState } from "react";

function Task22() {
  const [state, setstate] = useState("");

  const changeInp = (e) => {
    setstate(e.target.value);
  };

  const isValidEmail = () => {
    try {
      if (!/^[a-zA-Z1-9]+@[a-zA-Z]+\.[a-zA-Z]+/gm.test(state))
        throw new Error("email not valid");
      alert("email valid");
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div>
      <p>
        3. Создайте компонент с полем ввода и кнопкой. По клику на кнопку
        собрать данные из input и проверить вводимую строку на почту. Результат
        отображать в консоль
      </p>

      <input onChange={changeInp} type="text" />
      <button onClick={isValidEmail}>click</button>
    </div>
  );
}

export default Task22;
