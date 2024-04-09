function Task3() {
  let res = ["dima", "bugagaga@gmail.com", "sdfsad@mail.ru"].filter((el) => (
    <p>{el.includes("@")}</p>
  ));
  return (
    <div>
      {res}
      <p>
        На входе статичный массив строк. Ваша задача отфильтровать и отобразить
        на странице только те строки, которые содержат знак @
      </p>
    </div>
  );
}

export default Task3;
