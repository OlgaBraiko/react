import Info from "./components/Info";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Info />
      <div className="Indo">
        <h1>App component heading</h1>
        <h2>Heading in the Indo component</h2>
        <button className="my-button">App component button</button>
      </div>
    </div>
  );
}
//файлы со стилями не привязаны только к одному компоненту, они действуют по всему приложению

export default App;
