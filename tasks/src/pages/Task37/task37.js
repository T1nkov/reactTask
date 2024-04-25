import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task37() {
  const [ip, setIp] = useState();

  const getIp = async () => {
    const response = await axios.get(" https://api.ipify.org/?format=json");

    setIp(response.data.ip);
  };

  useEffect(() => {
    getIp();
  }, []);
  return (
    <div>
      <p>
        При ПЕРВИЧНОМ рендеринге (useEffect) используя axios обращаться к
        https://api.ipify.org/?format=json. API возвращает ваш ip-адрес. Ваша
        задача отображать ip-адрес в тег h1.
      </p>

      <h1>{ip}</h1>
    </div>
  );
}

export default Task37;
