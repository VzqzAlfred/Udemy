import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebaseconfig";

const Menu = () => {
  const [usuario, setUsuario] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        setUsuario(user.email);
      }
    });
  }, []);

  const logOut = () => {
    auth.signOut();
    setUsuario(null);
    navigate("/login");
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Inicio
            </Link>
          </li>
          <li>
            {!usuario ? (
              <Link className="nav-link" to="/login">
                Login
              </Link>
            ) : (
              <span></span>
            )}
          </li>
          <li>
            {usuario ? (
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            ) : (
              <span></span>
            )}
          </li>
        </ul>
        {usuario ? (
          <button className="btn btn-danger" onClick={() => logOut()}>
            Log Out
          </button>
        ) : (
          <span></span>
        )}
      </nav>
    </div>
  );
};

export default Menu;
