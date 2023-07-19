import "./App.css";
import Persons from "./components/Persons";

//итерация массива объектов

function App() {
  return (
    <div className="App">
      <Persons />
    </div>
  );
}

export default App;

//получаем объект с помощью спред опрератора и добавляем уникальный ключ key
