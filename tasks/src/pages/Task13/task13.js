function Task13() {
  function onKeyDown(e) {
    if (e.key === "Enter") {
      const res = e.target.value.split("").reverse().join("");
      console.log(res === e.target.value);
    }
  }

  return (
    <div>
      <p>
        3. По нажатию на enter в input onKeyDown выявлять является ли введенное
        слово палиндромом. Результат проверки отобразить в консоль
      </p>

      <input onKeyDown={onKeyDown} type="text" />
    </div>
  );
}

export default Task13;
