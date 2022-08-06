import React, { useState } from "react";

var uniqid = require("uniqid");

const ListNames = () => {
  const [textInput, setTextInput] = useState("");
  const [listNames, setListNames] = useState<any>([]);
  const [editionName, setEditionName] = useState(false);
  const [id, setId] = useState("");
  const [error, setError] = useState(false);

  const addName = (e: any) => {
    e.preventDefault();
    if (textInput === "") return;
    const newName = {
      id: uniqid(),
      titleName: textInput,
    };
    setListNames([...listNames, newName]);
    setTextInput("");
    setEditionName(false);
  };

  const handleName = (value: string) => {
    setTextInput(value);
  };

  const deleteName = (id: string) => {
    const newArray = listNames.filter((el: any) => el.id !== id);
    setListNames(newArray);
  };

  const edit = (item: any) => {
    setEditionName(true);
    setTextInput(item.titleName);
    setId(item.id);
  };

  const editName = (e: any) => {
    e.preventDefault();
    if (textInput === "") return;
    const newArray = listNames.map((el: any) =>
      el.id === id
        ? {
            id: id,
            titleName: textInput,
          }
        : el
    );
    setListNames(newArray);
    setTextInput("");
    setEditionName(false);
  };

  return (
    <div>
      <h2>App with CRUD basic.</h2>
      <div className="row">
        <div className="col">
          <h2>List of names</h2>
          <ul className="list-group">
            {listNames.map((el: any) => {
              return (
                <li key={el.id} className="list-group-item">
                  {el.titleName}

                  <button
                    className="btn btn-info m-3"
                    onClick={() => {
                      edit(el);
                    }}
                  >
                    EDIT
                  </button>
                  <button
                    className="btn btn-danger m-2"
                    onClick={() => {
                      deleteName(el.titleName);
                    }}
                  >
                    DELETE
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="col">
          <h2>Form for add names</h2>
          <form
            onSubmit={editionName ? editName : addName}
            className="form-group"
          >
            <input
              className="form-control mb-3"
              type="text"
              placeholder="Introduce el nombre"
              onChange={({ target: { value } }) => handleName(value)}
              value={textInput}
            />
            <input
              className="btn btn-info btn-block"
              type="submit"
              value={editionName ? "Edit Name" : "Sing In"}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ListNames;
