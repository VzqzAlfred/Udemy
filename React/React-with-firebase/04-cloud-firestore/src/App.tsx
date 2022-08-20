import React from "react";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <h2>Formulario de usuarios</h2>
          <form className="form-group">
            <input className="form-control" placeholder="Nombre" type="text" />
            <input
              className="form-control my-3"
              placeholder="Numero"
              type="text"
            />
            <input
              type="submit"
              className="btn btn-dark mt-3"
              value="Registrar"
            />
          </form>
        </div>
        <div className="col">
          <h2>Agenda</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
