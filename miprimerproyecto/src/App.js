import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import * as bootstrap from 'bootstrap'
import Navbar from './componentes/bootstrap/Navbar.jsx';


function App() {
  return (
    <div className="App">
      <h1>Impectori E-commerce</h1>
      <header className="App-header">
        <Navbar/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
        <button class="btn btn-primary">Entrar</button>
      </header>
    </div>
  );
}

export default App;
