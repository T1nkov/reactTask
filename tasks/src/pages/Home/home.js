import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>React tasks</h1>
      <h2>
        <Link to={"/task1"}>Task 1</Link>
      </h2>
      <h2>
        <Link to={"/task2"}>Task 2</Link>
      </h2>
      <h2>
        <Link to={"/task31"}>Task 31</Link>
      </h2>
      <h2>
        <Link to={"/task32"}>Task 32</Link>
      </h2>
      <h2>
        <Link to={"/task33"}>Task 33</Link>
      </h2>
      <h2>
        <Link to={"/task34"}>Task 34</Link>
      </h2>
      <h2>
        <Link to={"/task35"}>Task 35</Link>
      </h2>
    </>
  );
}

export default Home;
