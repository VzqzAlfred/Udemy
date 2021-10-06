import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';


// class MyFirstInput extends React.Component{

//      constructor(props){
//           super(props);
//           // console.log(this);
//           this.state = {
//                name : "Madds",
//                surname: "Nielsen",
//                age: 2
//           };
//      }

//      getFullName(){
//           const { name, surname } = this.state;
//           return name + " " + surname;
//      };




//      render(){
//           // console.log(this.state);
//           const { name, surname, age } = this.state;
//           return(
//                <div>
//                     {/* Hi {name} {surname}, he's {age} years. */}
//                     Hi {this.getFullName()}
//                </div>
//           );
//      }
// }


function MyFirstInput(){

     const [name] = useState("Madds");
     const [surname] = useState("Nielsen");

     const getFullName = () => `${name} ${surname}`;

     return(
          <div>
               Hola {getFullName()} with a useState c:
          </div>
     );
}


class Toggle extends React.Component{
     constructor(props){
          super(props);
          this.state = { isToggleOn: true};

          this.handleClick = this.handleClick.bind(this);
     }

     handleClick(){
          this.setState( prevState => ({
               isToggleOn: !prevState.isToggleOn
          }));
     }

     render(){
          return(
               <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? "ON" : "OFF"}
               </button>
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

          <Toggle />
      </main>
    </div>
  );
}

export default App;