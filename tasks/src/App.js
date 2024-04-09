import { Route, Routes } from "react-router-dom";
import "./App.css";
import Task1 from "./pages/Task1/task1";
import Task2 from "./pages/Task2/task2";
import Task3 from "./pages/Task3/task3";
import Task4 from "./pages/Task4/task4";
import Task5 from "./pages/Task5/task5";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/task1" element={<Task1 />} />
        <Route path="/task2" element={<Task2 />} />
        <Route path="/task3" element={<Task3 />} />
        <Route path="/task4" element={<Task4 />} />
        <Route path="/task5" element={<Task5 />} />
      </Routes>
    </div>
  );
}

export default App;
