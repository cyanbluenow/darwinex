import logo from "../resources/logo darwinex.svg";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://darwinex.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Darwinex Homepage
        </a>
      </header>
    </div>
  );
}

export default App;
