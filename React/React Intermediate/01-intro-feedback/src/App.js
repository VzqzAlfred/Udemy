import logo from './logo.svg';
import { useState } from 'react';
import './App.css';


const ChildrenComponent = ({color}) => {
     const [fruit, setFruit] = useState("Watermelon");

     // setFruit("Watermelon");

     return (
          <div>
               <h4>Type a fruit's name: {fruit} with color {color}</h4>
          </div>
     );
}



function App() {

  return (
    <div className="App">
      <main className="App-header">
           <h1>Feedback with React 🙂</h1>
        <img src={logo} className="App-logo" alt="logo" />

          <ChildrenComponent color="Brown" />

      </main>
    </div>
  );
}

export default App;