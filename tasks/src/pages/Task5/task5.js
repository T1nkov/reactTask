function Task5() {
  let res = ["a", 2, "b", 12].map((el) => {
    if (!isNaN(el)) return el % 2 == 0 ? <p>{el} чет</p> : <p>{el} нечет</p>;

    if (isNaN(el)) return <p>{el}</p>;
  });
  return (
    <div>
      {res}
      <p>
        На входе статичный массив чисел и букв. Ваша задача отобразить на
        странице в случае числа четность и нечетность текущего значения в
        параграфе, в случае строки отобразить саму строку в параграфе
      </p>
    </div>
  );
}

export default Task5;
