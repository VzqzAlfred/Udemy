import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './App.css'

const tick = () => {
     const element =  (
          <div className="App App-header">
          <h1>Clock</h1>
          <h3>It's {new Date().toLocaleTimeString()}</h3>
          </div>
     );

     ReactDOM.render(element, document.getElementById("root2"));
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

setInterval(() => {
     tick()
}, 1000);