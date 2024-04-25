import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task36() {
  const [state, setState] = useState();

  const getImg = async () => {
    const response = await axios.get("https://dog.ceo/api/breeds/image/random");

    setState(response.data.message);
  };

  useEffect(() => {
    getImg();
  }, []);
  return (
    <div>
      <p>
        1. При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
        https://dog.ceo/api/breeds/image/random. API возвращает ссылку на
        случайные изображения. Ваша задача отображать картинки в img.
      </p>

      <img src={state} alt="" />
    </div>
  );
}

export default Task36;
