import './App.css';
import React, { useState } from 'react';
import LifeCycleComponent from './Components/LifeCycleComponente';
import HookUseEffect from './Components/HookUseEffect';
import JSONData from './Components/JSONData';

const ExampleState = () => {

     const [name, setName] = useState("");
     const [age] = useState("");
     // const [, setSomething] = useState("Hey");

     const handleHeyClic = () => setName("Orange");

     <LifeCycleComponent />
     return (
          <div className="App">
               <h2>Hi {name}</h2>
               <p>{age}</p>
               <button onClick={handleHeyClic}>Hey!</button>
          </div>
     );
} 

function App() {
     
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const [isLogged, setIsLogged] = useState(false);

     const handleLoginClick = () => {
          setIsLogged(true);
     } 

     const handleEmailChange = (e) => setEmail(e.target.value);

     // console.log(email);

     const handlePasswordChange = ( { target : { value }}) => setPassword(value);

     // console.log(password);

     const handleFormSubmit = (e) => {
          console.log("Sending...");
          console.log(e);
          e.preventDefault();
          alert(`User: ${email}, Password: ${password}`)
     }

  return (
       <>
    <div className="App App-header">
         
         <form onSubmit={ handleFormSubmit }>
              <h2>Log In 😃</h2>

              <label htmlFor="email">e-mail: </label>
              <input id="email" type="email" value={email} onChange={ handleEmailChange } />

              <label htmlFor="password">Password: </label>
              <input id="password" type="password" value={password} onChange={ handlePasswordChange } />

              <button type="submit" onClick={handleLoginClick}>Send</button>

               { isLogged && <h3>Log In Succesfully</h3> }
              
         </form>


         
    </div>
    <div className="App">
         <hr />
         <ExampleState />

         <hr />
         <LifeCycleComponent />

         <hr />
          <HookUseEffect />

          <hr /><br />
          <JSONData />
          <br />
         
    </div>
         </>
  );
}

export default App;
