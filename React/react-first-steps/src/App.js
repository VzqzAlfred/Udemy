import logo from './Assets/img/logo.svg';
import './Assets/CSS/App.css';
import MyComponent from './Components/MyComponent';

const greeting = name => {
     let present = <h3>Hi {name}</h3>;
     return present;
}


function App() {
     
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          {
               greeting("user")
          }
        </p>

        <MyComponent />
      </header>
    </div>
  );
}

export default App;
