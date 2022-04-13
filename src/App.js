import logo from "./logo.svg";
import "./App.css";
import NavBar from "./Components/NavBar";
import CheckOut from "./Components/CheckOut";
import Rating from "./Components/Rating";
function App() {
  return (
    <div className="App">
      <Rating
        style={{ backgroundColor: "lightblue" }}
        onDoubleClick={() => {
          alert("double click");
        }}
      />
      <NavBar></NavBar>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save a
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <CheckOut />
    </div>
  );
}

export default App;
