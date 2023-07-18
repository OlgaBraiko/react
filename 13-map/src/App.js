import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Counter from "./components/Counter";

//строки поместим в массив
const texts = ["Click me", "Click me please", "Hit me", "Press me"];
//доступ можно получить через номер индекса или с методом map
function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Counter count={count} />
      {texts.map((text, index) => {
        return <Button onClick={incrementCount} text={text} key={index} />;
      })}
    </div>
  ); // тк как тексты разные мы можем использовать key={text}
} //в противном случае добавляется индекс

export default App;

//<Button onClick={incrementCount} text={texts[0]} />
//<Button onClick={incrementCount} text={texts[1]} />
//<Button onClick={incrementCount} text={texts[2]} />
//<Button onClick={incrementCount} text={texts[3]} />
//индекс равносильно методу map
