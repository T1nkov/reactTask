import { useState, useEffect, useCallback } from "react";

function Task72() {
  const [list, setList] = useState(["ds", 'asd', 'basr']);
  const [inp, setInp] = useState('')
  
  
  const delText = useCallback((el)=>{
    setList(list.filter(elem => elem !== el))
  })

  const addText = useCallback (()=>{
    setList([...list, inp])
  })

  return (
    <div>
      <p>
        . Создайте компонент, который позволяет пользователю добавлять и удалять
        элементы из списка. Используйте useCallback, чтобы оптимизировать
        функции добавления и удаления элементов.
      </p>
      <div>
    <input type="text" onChange={(e)=> setInp(e.target.value)} />
    <button onClick={addText}>add</button>

    {list.map(el=> <p>{el} <button onClick={()=>delText(el)}>del</button></p>)}
      </div>
    </div>
  );
}

export default Task72;
