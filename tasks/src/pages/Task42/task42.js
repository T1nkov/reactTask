import React, { useState, useEffect } from "react";
import axios from "axios";

function Task42() {
  const [universities, setUniversities] = useState([]);
  const [country, setCountry] = useState();

  const selectUniversities = async () => {
    const response = await axios.get(
      `http://universities.hipolabs.com/search?country=${country}`
    );
    setUniversities(response.data.slice(0, 10));
  };

  useEffect(() => {
    selectUniversities();
  }, [country]);

  const getCountry = (e) => {
    setCountry(e.target.textContent);
  };

  return (
    <div>
      <p>
        Совместить задачи 3 и 6. По клику на кнопку отображать университеты
        выбранной страны. Реализовать селектор, где по клику на кнопку
        отображается 3 параграфа. При повторном клике параграфы скрываются. При
        первичном рендеринге (useEffect) используя axios обращаться к
        http://universities.hipolabs.com/search?country=Belarus. API возвращает
        университеты страны, переданной в качестве одного из доментов URL. Ваша
        задача отображать все университеты в теге параграф.
      </p>
      <h1>{country}</h1>
      <button onClick={getCountry}>Ukraine</button>
      <button onClick={getCountry}>Belarus</button>
      <button onClick={getCountry}>France</button>
      <button onClick={getCountry}>United States</button>

      <div>
        {universities.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Task42;
