import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

const getUser = async () => {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getUser();

const HandleClick = () => {
  /*
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => console.log(error));
      */

  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Welcome Friend!</p>
    </div>
  );
};

function App() {
  const [show, setShow] = useState(false);

  let data = [
    { name: "Jhon", age: 30 },
    { name: "David", age: 33 },
    { name: "Louis", age: 36 },
    { name: "Mark", age: 39 },
    { name: "Butller", age: 42 },
  ];

  console.log(data.map((el) => console.log(el.name)));

  return (
    <div className="App-header">
      <div>
        <p>hola</p>
        <button
          style={{
            padding: 8,
            fontSize: 18,
            borderRadius: 10,
            background: "#f0ab25",
            color: "#654682",
            fontWeight: "bold",
            cursor: "pointer",
          }}
          onClick={() => setShow(!show)}
        >
          {show ? "Ocultar" : "Mostrar"}
        </button>
        {show && <HandleClick />}
      </div>
    </div>
  );
}

export default App;
