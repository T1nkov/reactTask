function Task6() {
  const arr = [
    {
      title: "One ad",
      description: "sdfsdf",
    },
    {
      title: "One ad",
      description: "sdfsdf",
    },
    {
      title: "One ad",
      description: "sdfsdf",
    },
  ];

  const res = arr.map((el) => {
    return (
      <>
        <h1>{el.title}</h1>
        <p>{el.description}</p>
      </>
    );
  });

  return (
    <div>
      <p>
        На входе массив из объектов. каждый объект содержит title с названием
        фильма и description с кратким описанием фильма. В h1 отобразить каждый
        title, в p - description
      </p>

      <div> {res}</div>
    </div>
  );
}

export default Task6;
