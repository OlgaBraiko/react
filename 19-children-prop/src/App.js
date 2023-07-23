import "./App.css";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <div>
      <div className="App">
        <Wrapper>
          <h2>Text inside of the Wrapper</h2>
          <button>Click me</button>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="App2">
          <h2>Another text</h2>
          <p>Some discription me</p>
          <input type="text" placeholder="Enter value" />
        </div>
      </Wrapper>
    </div>
  );
}

export default App;
//св-во в компоненте передается через children
