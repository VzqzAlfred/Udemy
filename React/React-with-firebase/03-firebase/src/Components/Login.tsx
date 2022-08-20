import React, { useState } from "react";
import { auth } from "../firebaseconfig";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const SignInUser = (e: any) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((r) => {
        navigate("/");
        return toast.success("Usuario registrado con éxito");
      })
      .catch((e) => {
        if (e.code === "auth/invalid-email") {
          return toast.error("El email no es correcto");
        }
        if (e.code === "auth/weak-password") {
          return toast.error("La contraseña debe tener al menos 6 caracteres");
        }
      });
  };

  const LogInUser = (e: any) => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        toast.success("Has iniciado sesión");
        navigate("/");
      })
      .catch((e: any) => {
        if (e.code === "auth/user-not-found") {
          toast.error("El correo del usuario es incorrecta.");
        }
        if (e.code === "auth/wrong-password") {
          toast.error("La contraseña del usuario es incorrecta.");
        }
      });
  };

  return (
    <>
      <div className="row mt-5">
        <div className="col"></div>
        <div className="col">
          <form onSubmit={(e) => SignInUser(e)} className="form-group">
            <input
              className="form-control"
              placeholder="E-mail"
              type="text"
              onChange={({ target: { value } }) => setEmail(value)}
            />
            <input
              onChange={({ target: { value } }) => setPassword(value)}
              className="form-control mt-4"
              placeholder="Password"
              type="password"
            />
            <input
              className="btn btn-dark mt-4"
              type="submit"
              value="Sign In"
            />
          </form>
          <button className="btn btn-success mt-3" onClick={LogInUser}>
            Log In
          </button>
          <Toaster />
        </div>
        <div className="col"></div>
      </div>
    </>
  );
};

export default SignIn;
