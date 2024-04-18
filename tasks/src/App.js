import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/home";
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
import Task21 from "./pages/Task21/task21";
import Task22 from "./pages/Task22/task22";
import Task23 from "./pages/Task23/task23";
import Task24 from "./pages/Task24/task24";
import Task25 from "./pages/Task25/task25";
import Task26 from "./pages/Task26/task26";
import Task31 from "./pages/Task31/task31";
import Task32 from "./pages/Task32/task32";
import Task33 from "./pages/Task33/task33";
import Task34 from "./pages/Task34/task34";
import Task35 from "./pages/Task35/task35";
import Input1 from "./pages/Input1/input1";
import Input2 from "./pages/Input2/input2";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
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
        <Route path="/task21" element={<Task21 />} />
        <Route path="/task22" element={<Task22 />} />
        <Route path="/task23" element={<Task23 />} />
        <Route path="/task24" element={<Task24 />} />
        <Route path="/task25" element={<Task25 />} />
        <Route path="/task26" element={<Task26 />} />
        <Route path="/task31" element={<Task31 />} />
        <Route path="/task32" element={<Task32 />} />
        <Route path="/task33" element={<Task33 />} />
        <Route path="/task34" element={<Task34 />} />
        <Route path="/task35" element={<Task35 />} />
        <Route path="/input1" element={<Input1 />} />
        <Route path="/input2" element={<Input2 />} />
      </Routes>
    </div>
  );
}

export default App;
