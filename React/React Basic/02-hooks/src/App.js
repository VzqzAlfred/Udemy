import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

     const [counter, setCounter] = useState(0);
     const [stateCar, setStateCar] = useState(false);
     const [acumulador, setAcumulador] = useState(0);

    
     useEffect( () => {
          console.log(`Total: ${acumulador}`);
     }, [acumulador]);

     const nums = () => {
          setAcumulador( acumulador + 1 );
     }


     const plus = () => {
          setCounter( counter + 1 );
     }

     const minus = () => {
          setCounter( counter - 1 );
     }


     const encenderApagar = () => {
          // setStateCar(!stateCar);

          setStateCar(prevValue => !prevValue);
     }

  return (
    <div className="App">
      <header className="App-header">
           <h1>Hooks</h1>
        <img src={logo} className="App-logo" alt="logo" />
        
          <div>
               <h3>1. useState</h3>

               <p>Contador</p>

               <code><b>{counter}</b></code>
               <br />
               <button onClick={ () => plus() }>+</button>
               <button onClick={ () => minus() }>-</button>

               <p><b>Carrito</b></p>
               <p>El coche esta: {stateCar ? "Encendido" : "Apagado"}</p>
               <button onClick={encenderApagar}>Encendido / Apagado</button>
          </div>


          <div>
               <h3>2. useEffect</h3>

               <p>Num: {acumulador}</p>
               <button onClick={ nums }>Suma</button>
          </div>

      </header>
    </div>
  );
}

export default App;
