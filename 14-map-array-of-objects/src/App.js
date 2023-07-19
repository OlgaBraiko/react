import "./App.css";
import Person from "./components/Persons";
import persons from "./data/persons";

//итерация массива объектов

function App() {
  return (
    <div className="App">
      {persons.map((person) => {
        const { id, firsName, lastName, email, img } = person;
        return (
          <Person
            id={id}
            firsName={firsName}
            lastName={lastName}
            email={email}
            img={img}
          />
        );
      })}
    </div>
  );
}

export default App;
