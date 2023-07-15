import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    //добавили свойство чтобы передавать разные цифры и питомцев
    <div className="App">
      <PetInfo animal="cat" age={4} />
      <PetInfo animal="dog" age="5" />
    </div>
  );
}

export default App;
