function Task2() {
  const res = [4, 9, 16, 25, 36].map((el) => <h1>{Math.sqrt(el)}</h1>);
  return (
    <div>
      <p>
        {res}. На входе статичный массив чисел. Ваша задача найти корень каждого
        числа и отобразить на странице в виде h1
      </p>
    </div>
  );
}

export default Task2;
