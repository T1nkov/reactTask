function Task1() {
  const res = [1, 2, 3, 4, 5, 6].map((el) => el ** 2);
  return (
    <div>
      <div>
        <h1>Resultat </h1>
        <h3>{res}</h3>
      </div>
      <p>
        1. На входе статичный массив чисел. Ваша задача каждое число массива
        возвести в квадрат и отобразить на странице
      </p>
    </div>
  );
}

export default Task1;
