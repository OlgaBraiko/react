import "./App.css";
import Person from "./components/Persons";
import persons from "./data/persons";

//итерация массива объектов

function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
    </div>
  );
}

export default App;

//получаем объект с помощью спред опрератора и добавляем уникальный ключ key
