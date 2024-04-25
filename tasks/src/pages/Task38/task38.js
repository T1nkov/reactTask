import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task38() {
  const [uni, setUni] = useState([]);

  const getUniversity = async () => {
    const response = await axios.get(
      " http://universities.hipolabs.com/search?country=Belarus"
    );

    setUni(response.data);
  };

  useEffect(() => {
    getUniversity();
  }, []);
  return (
    <div>
      <p>
        . При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
        http://universities.hipolabs.com/search?country=Belarus. API возвращает
        университеты страны переданной в качестве одного из доментов url. Ваша
        задача отображать все университеты в тег параграф
      </p>

      <div>
        {uni.map((el) => (
          <p>{el.name}</p>
        ))}
      </div>
    </div>
  );
}

export default Task38;
