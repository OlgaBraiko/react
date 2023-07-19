import Button from "./components/Button";
import Counter from "./components/Counter";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
  };

  const buttonStyle = { backgroundColor: "lightgreen" }; //объект js

  return (
    <div className="App">
      <div>
        <Counter count={count} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <Button onClick={incrementCount} />
        <div>
          <button style={buttonStyle}>Reset</button>
        </div>
      </div>
    </div>
  );
}
//добавление стилей
export default App;
