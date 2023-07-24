import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState(null); //todo=null
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => setTodo(json)); //здесь у todo меняется значение на объект json
  }, []);

  return <div className="App">{todo && <h1>{todo.title}</h1>}</div>; //выведет значение если todo не null
}

export default App;

//чтобы избежать бесконечный цикл компонента применяется useEffect
