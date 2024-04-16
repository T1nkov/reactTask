import { useState } from "react";

function Task25() {
  const [state, setstate] = useState("");

  const [flag, setFlag] = useState(false);

  const changeInp = (e) => {
    if(!e.target.value) setFlag('false')
    setstate(e.target.value);
    
  };


  const sayHi = () => {
    setFlag(true);
  };
  return (
    <div>
      <p>
        Создайте компонент с полем ввода имени и кнопкой "Привет". При вводе
        имени в поле и нажатии на кнопку, компонент должен отображать
        приветственное сообщение с именем, введенным пользователем
      </p>

      <input onChange={changeInp} type="text" />
      <button onClick={sayHi} >
        click
      </button>
      <p>{flag ? `hi ${state}` : "вы ничего не ввели"}</p>
    </div>
  );
}

export default Task25;
