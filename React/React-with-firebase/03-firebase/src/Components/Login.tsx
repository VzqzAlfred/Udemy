import React, { useState } from "react";
import { auth } from "../firebaseconfig";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignInUser = (e: any) => {
    e.preventDefault();
    try {
      auth.createUserWithEmailAndPassword(email, password);
      alert("User registrado");
    } catch (error) {
      console.log(error);
    }
  };

  return (
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
          <input className="btn btn-dark mt-4" type="submit" value="Log In" />
        </form>
      </div>
      <div className="col"></div>
    </div>
  );
};

export default Login;
