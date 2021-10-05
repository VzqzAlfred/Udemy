import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


class MyFirstInput extends React.Component{

     constructor(props){
          super(props);
          // console.log(this);
          this.state = {
               name : "Madds",
               age: 2
          };
     }

     render(){
          // console.log(this.state);
          const { name, age } = this.state;
          return(
               <div>
                    Hi {name}, he's {age} years.
               </div>
          );
     }
}


const ChildrenComponent = ({color}) => {
     const [fruit] = useState("Watermelon");
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

          <MyFirstInput />
      </main>
    </div>
  );
}

export default App;