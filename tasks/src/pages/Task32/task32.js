import { useState } from "react";

function Task32() {
  const [flag, setFlag] = useState(true);

  const openMenu = () => {
    setFlag(flag ? false : true);
  };

  return (
    <div>
      <p>
        Напишите компонент, включающий в себя выезжающее меню из трех
        параграфов. По нажатию на кнопку "Открыть" меню должно отображаться.
      </p>

      <button onClick={openMenu}>{flag ? "open" : "close"}</button>
      {flag ? null : (
        <div>
          <p>txt1</p>
          <p>txt2</p>
          <p>txt3</p>
        </div>
      )}
    </div>
  );
}

export default Task32;
