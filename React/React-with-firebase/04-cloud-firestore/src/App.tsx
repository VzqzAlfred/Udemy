import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { store } from "./firebaseconfig";

function App() {
  const [moodEdition, setMoodEdition] = useState(false);
  const [idUser, setIdUser] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [users, setUsers] = useState<any>([]);

  const setUsuarios = async (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El campo nombre esta vacío.");
    } else if (!phone.trim()) {
      toast.error("El campo del télefono esta vacío.");
    } else {
      const usuario = {
        name,
        phone,
      };

      try {
        await store.collection("agenda").add(usuario);
        const { docs } = await store.collection("agenda").get();
        const newUsers = docs.map((el) => ({ id: el.id, ...el.data() }));
        setUsers(newUsers);
        toast.success("Usuario agregado con éxito");
      } catch (error: any) {
        console.log(error);
      }
      setName("");
      setPhone("");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const { docs } = await store.collection("agenda").get();

      const newUsers = docs.map((el) => ({ id: el.id, ...el.data() }));
      setUsers(newUsers);
    };
    getUsers();
  }, [users]);

  const deleteUser = async (id: string) => {
    try {
      await store.collection("agenda").doc(id).delete();
      const { docs } = await store.collection("agenda").get();
      const newUsers = docs.map((el) => ({ id: el.id, ...el.data() }));
      setUsers(newUsers);
      toast.success("El usuario ha sido eliminado.");
    } catch (e: any) {
      console.log(e);
    }
  };

  const update = async (id: string) => {
    try {
      const data: any = await store.collection("agenda").doc(id).get();
      console.log(data.data());
      console.log(id);
      const { name, phone } = data.data();
      setName(name);
      setPhone(phone);
      setMoodEdition(true);
      setIdUser(id);
      console.log("ID: ", idUser);
    } catch (e: any) {
      console.log(e);
    }
  };

  const setUpdate = async (e: any) => {
    e.preventDefault();
    if (!name.trim()) {
      toast.error("El campo nombre esta vacío.");
    } else if (!phone.trim()) {
      toast.error("El campo del télefono esta vacío.");
    } else {
      const userUpdated = {
        name,
        phone,
      };
      try {
        await store.collection("agenda").doc(idUser).set(userUpdated);
        const { docs } = await store.collection("agenda").get();
        const newUsers = docs.map((el) => ({ id: el.id, ...el.data() }));
        setUsers(newUsers);
        toast.success("Usuario actualizado");
        setName("");
        setPhone("");
        setMoodEdition(false);
      } catch (e) {
        console.log(e);
      }
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col ">
          <h2>Formulario de usuarios</h2>
          <form
            className="form-group"
            onSubmit={(e) => (moodEdition ? setUpdate : setUsuarios)}
          >
            <input
              value={name}
              className="form-control"
              placeholder="Nombre"
              type="text"
              onChange={(e: any) => setName(e.target.value)}
            />
            <input
              value={phone}
              className="form-control my-3"
              placeholder="Numero"
              type="text"
              onChange={(e: any) => setPhone(e.target.value)}
            />
            {moodEdition ? (
              <input
                type="submit"
                className="btn btn-dark mt-3"
                value="Actualizar"
              />
            ) : (
              <input
                type="submit"
                className="btn btn-dark mt-3"
                value="Registrar"
              />
            )}
          </form>
          <Toaster position="top-center" reverseOrder={false} />
        </div>
        <div className="col">
          <h2>Agenda</h2>
          {users.length !== 0 ? (
            <ul className="list-group">
              {users.map((el: any) => (
                <li key={el.id} className="list-group-item">
                  {el.name} -- phone: {el.phone}
                  <button
                    className="btn btn-info mx-3"
                    onClick={() => update(el.id)}
                  >
                    Actualizar
                  </button>
                  <button
                    className="btn btn-danger"
                    onClick={() => deleteUser(el.id)}
                  >
                    Borrar
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <span className="">Sin usuarios en la agenda </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
