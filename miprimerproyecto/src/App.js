import logo from './logo.svg';
import './App.css';

import "bootstrap/dist/css/bootstrap.css";
import Navbar from './componentes/bootstrap/Navbar.jsx';

import Button from './componentes/Button/Button.jsx'; 
import ItemList from './componentes/ItemListContainer/ItemList';

function App() {

  let nombre = "Impectory Gym"

  function mostrarNombre() {
    return `Bienvenidos a ${nombre}`
  }

  function darelClickImagen() {
    console.log("Click en la imagen")
  }

  /* class navbar extends React.Componentes{
    render(){

    }
  } */
  return (
    <div className="App">
      <h1>{mostrarNombre()}</h1>
      <header className="App-header">
        <Navbar className="navbar"/>
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
          
        <img 
        onClick={darelClickImagen}
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIL-6u_TJw9BXa6oXnIc0d2qmn66f-ltcJiA&usqp=CAU" alt = "logo"/>
  
        </a>
        <br/>
        <Button>{"Hola"}</Button>
       <Button>soy un boton</Button>

  
      </header>
      <ItemList
      price = {200}     
      title = "pesas"
      img="../src/componentes/img/cocodrilo.jpg"
      />  
    </div>
  );
}

export default App;
