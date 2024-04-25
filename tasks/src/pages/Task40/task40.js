import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task40() {
  const [name, setName] = useState();

  const show = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>
        Создайте форму ввода, в которой пользователь может вводить своё имя и
        отображать его под формой.
      </p>
      <div>
        <input onChange={show} type="text" />
      </div>
      <h1>{name}</h1>
    </div>
  );
}

export default Task40;
