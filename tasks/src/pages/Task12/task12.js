function Task12() {
  function showInputValue(e) {
    console.log(e.target.value);
  }

  return (
    <div>
      <p>
        По событию изменения input отображать в консоль каждое вводимое значение
      </p>

      <input onChange={showInputValue} type="text" />
    </div>
  );
}

export default Task12;
