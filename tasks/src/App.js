import { Route, Routes } from "react-router-dom";
import "./App.css";
import Task1 from "./pages/Task1/task1";
import Task2 from "./pages/Task2/task2";
import Task3 from "./pages/Task3/task3";
import Task4 from "./pages/Task4/task4";
import Task5 from "./pages/Task5/task5";
import Task6 from "./pages/Task6/task6";
import Task7 from "./pages/Task7/task7";
import Task8 from "./pages/Task8/task8";
import Task9 from "./pages/Task9/task9";
import Task10 from "./pages/Task10/task10";
import Task12 from "./pages/Task12/task12";
import Task13 from "./pages/Task13/task13";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
        <Route path="/task6" element={<Task6 />} />
        <Route path="/task7" element={<Task7 />} />
        <Route path="/task8" element={<Task8 />} />
        <Route path="/task9" element={<Task9 />} />
        <Route path="/task10" element={<Task10 />} />
        <Route path="/task12" element={<Task12 />} />
        <Route path="/task13" element={<Task13 />} />
      </Routes>
    </div>
  );
}

export default App;
