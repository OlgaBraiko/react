import Button from "./components/Button";
import Counter from "./components/Counter";
import Reset from "./components/Reset";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const buttonStyle = { backgroundColor: "lightgreen" }; //объект js
  const resetCount = () => {
    setCount(0); //фун-ия для кнопки reset обнуление счетчика
  };
  return (
    <div className="App">
      <div>
        <Counter count={count} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Reset />
      </div>
    </div>
  );
}
//добавление стилей
//добавление обработчика клик
//скрываем кнопку reset пока нет клика с помощью &&
export default App;
