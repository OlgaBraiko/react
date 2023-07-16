import "./App.css";
import PetInfo from "./components/PetInfo";

function App() {
  return (
    //в первом компоненте  можем не писать булевое значение тк короткая запись ,а false не может быть в ковычках
    <div className="App">
      <PetInfo animal="dog" age={4} hasPet />
      <PetInfo animal="cat" age={7} hasPet={false} />
    </div>
  );
}

export default App;
