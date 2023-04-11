import logo from './logo.svg';
import './App.css'; /* Imports desde  */

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> //Source con una variable
        <p> 
        <h3>Mi primer app de React</h3>
        <input placeholder="Mi primer input"></input>
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
    </div>
  );
}

export default App;
