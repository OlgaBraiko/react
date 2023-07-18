import { useState } from "react"; // сначала пишем внешние импорты
import Counter from "./components/Counter";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [count, setCount] = useState(0); // передаем первый элемент в дочерний компонент
  //сохраняем состояние в родительском компоненте, чтобы влиять на него из дочерних
  const incrementCount = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Counter count={count} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
      <Button onClick={incrementCount} />
    </div>
  );
}

export default App;
