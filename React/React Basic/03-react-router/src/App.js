import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Contacto from './Pages/Contacto';
import WhoIs from './Pages/WhoIs';


function App() {
  return (
    <div className="App">
      <header className="App-header">
           <h1>React Router DOM 🙂</h1>
        <img src={logo} className="App-logo" alt="logo" />

        <Router>
             <div>
                  <Link to="/" className="App-link">Home</Link>
                  <br />
                  <Link to="/contacto" className="App-link">Contacto</Link>
                  <br />
                  <Link to="/who-is" className="App-link">¿Quién soy?</Link>
             </div>

             <Switch>
                  <Route path="/contacto">
                       <Contacto />
                  </Route>

                  <Route path="/who-is">
                    <WhoIs />
                  </Route>
             </Switch>
        </Router>
      </header>
    </div>
  );
}

export default App;
