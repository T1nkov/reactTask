import { useState, useEffect } from "react";

import axios from "axios";

function Task47() {
  const [state, setState] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get("https://api.ipify.org/?format=json");
      setState(response.data);
    };

    fetchData();
  }, [state]);
  return (
    <div>
      <p>
        Запрос к API с использованием useState и useEffect: Создайте компонент,
        который выполняет запрос к API https://api.ipify.org/?format=json и
        отображает полученные данные в заголовок.
      </p>
      <div>
        <input type="text" />
        <button>Click here</button>
      </div>
    </div>
  );
}

export default Task47;
