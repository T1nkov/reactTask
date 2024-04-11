function Task10() {
  const str = "adsfsdfsdafsd";
  function checkStr(params) {
    try {
      if (/^[\w\.\_\-\@\$\&]{8,}/gm.test(str))
        throw new Error("неподходящий пароль");
      alert("suesseful");
    } catch (error) {
      alert(error.message);
    }
  }
  return (
    <div>
      <p>
        . На входе переменная пароля. По клику на кнопку необходимо реализовать
        метод валидации. Написать регулярное выражение: пароль от 8 символов,
        содержит числа, буквы, !@#$^&*. Результат отобразить в консоль
      </p>

      <button onClick={checkStr}>press</button>
    </div>
  );
}

export default Task10;
