import persons from "../data/persons";
import Person from "./Persons";

function Persons() {
  return (
    <div className="cards">
      {persons.map((person) => {
        <Person key={person.id} {...person} />;
      })}
      ;
    </div>
  );
}

export default Persons;
