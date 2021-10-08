import './App.css';
import React, { useState } from 'react'

function App() {
     
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");

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
    <div className="App App-header">
         
         <form onSubmit={ handleFormSubmit }>
              <h2>Log In 😃</h2>

              <label htmlFor="email">e-mail: </label>
              <input id="email" type="email" value={email} onChange={ handleEmailChange } />

              <label htmlFor="password">Password: </label>
              <input id="password" type="password" value={password} onChange={ handlePasswordChange } />

              <button type="submit">Send</button>
         </form>
    </div>
  );
}

export default App;
