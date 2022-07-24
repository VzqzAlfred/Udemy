import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      console.log("Name is empty");
      return;
    }

    if (!age.trim()) {
      console.log("The Age is empty");
      return;
    }
  };

  return (
    <div className="container">
      <form onSubmit={validate} className="form-group">
        <input
          placeholder="Type a name"
          className="form-control mb-3"
          type="text"
          onChange={({ target: { value } }) => {
            setName(value);
          }}
        />
        <input
          placeholder="Type an age"
          className="form-control mb-3"
          type="text"
          onChange={({ target: { value } }) => {
            setAge(value);
          }}
        />
        <input className="btn btn-info btn-block mb-3" type="submit" />
      </form>
    </div>
  );
};

export default Form;
