import { useState } from "react";

function Input1() {
  const [list, setList] = useState(["do HW", "buy milk"]);
  const [data, setData] = useState("");

  //   const toDoList = list.map((el) => <p>{el}</p>);
  const removeItem = (e) => {
    setList(list.filter((el) => el !== e.target.id));
  };
  return (
    <div>
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />

      <button
        onClick={() => {
          setList([...list, data]);
          setData("");
        }}
      >
        Click
      </button>

      <div>
        {list.map((el) => {
          return (
            <p>
              {el}
              <button id={el} onClick={removeItem}>
                delete
              </button>
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default Input1;
