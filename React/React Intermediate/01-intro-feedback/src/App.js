import logo from './logo.svg';
import './App.css';

const ChildrenComponent = ({thing, color}) => {

     return (
          <div>
               <h4>Type a fruit: {thing} with color {color}</h4>
          </div>
     );
}


function App() {

  return (
    <div className="App">
      <main className="App-header">
           <h1>Feedback with React 🙂</h1>
        <img src={logo} className="App-logo" alt="logo" />

          <ChildrenComponent thing="Watermelon" color="Brown" />

      </main>
    </div>
  );
}

export default App;
