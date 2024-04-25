import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Task41() {
  const [state, setState] = useState(false);

  const setVisible = () => {
    setState(!state);
  };

  return (
    <div>
      <p>
        6. Реализовать селектор, где по клику на копку отображается 3 параграфа.
        При повторном клике параграфы скрываются.
      </p>
      <button onClick={setVisible}>{state ? "hide" : "show"}</button>
      {state && (
        <div>
          <p>lorem ipsum aSDASD</p>
          <p>lorem ipsum aSDASD</p>
          <p>lorem ipsum aSDASD</p>
        </div>
      )}
    </div>
  );
}

export default Task41;
