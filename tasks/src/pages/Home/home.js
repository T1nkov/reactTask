import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>React tasks</h1>
      <h2>
        <Link to={"/task1"}>Task 1</Link>
        <Link to={"/task2"}>Task 2</Link>
        <Link to={"/task3"}>Task 3</Link>
        <Link to={"/task6"}>Task 6</Link>
        <Link to={"/task31"}>Task 31</Link>
        <Link to={"/task32"}>Task 32</Link>
        <Link to={"/task33"}>Task 33</Link>
        <Link to={"/task34"}>Task 34</Link>
        <Link to={"/task35"}>Task 35</Link>
      </h2>
    </>
  );
}

export default Home;
