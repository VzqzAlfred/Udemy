import logo from './logo.svg';
import './App.css';
import { Component1 } from './Components/Component1';
import { Greeting } from './Components/Greeting';
import { Alert, Button} from 'react-bootstrap';
import {ReactComponent as Batman} from "./assets/bat.svg"


function App() {

     const userName = "Anonymous";
     const height = 73;

     const user = {
          name: "user Anonymous",
          height: 193,
          color: "Purple"
     }

     const Saludar = name => {
          alert( `Hi ${name}` );
     }
     

  return (
     <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edited with Raspberry PI.
        </p>

        <Component1 />

        {/* <Greeting name="Buddy"  height="168"/> */}
        <Greeting user={user} Saludar={Saludar} />


     <hr />

     <div>
          <h3>React Bootstrap</h3>
          <Button variant="success" onClick={() => alert("Testing bootstrap")}>Botonazo</Button>
          <br />
          <br />
          <Alert variant="success">
               This is a success alert with{' '}
          <Alert.Link>an example link</Alert.Link>. Give it a click if you
    like.
  </Alert>
          

          <Batman />

     </div>
      </header>
    </div>
    </>
  );
}

export default App;
