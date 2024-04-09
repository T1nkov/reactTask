import sale2 from "./assets/sale2.png";

function Task4() {
  let res = ["dima", "banan", "balalaika"].map((el) => (
    <div>
      <p>{el}</p>
      <img src={sale2} alt="" />
    </div>
  ));
  return (
    <div>
      <p>
        {res}
        На входе статичный массив строк. Ваша задача отобразить на странице все
        строки массива, а также картинку. Каждая итерация будет возвращать
        &lt;div&gt; &lt;p&gt;el&lt;/p&gt; &lt;img/&gt;&lt;/div&gt;
      </p>
    </div>
  );
}

export default Task4;
