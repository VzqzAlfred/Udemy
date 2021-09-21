import logo from './logo.svg';
import './App.css';
import { Component1 } from './Components/Component1';
import { Greeting } from './Components/Greeting';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited with Raspberry PI.
        </p>

        <Component1 />


        <Greeting name="Buddy"  height="168"/>
      </header>
    </div>
  );
}

export default App;
