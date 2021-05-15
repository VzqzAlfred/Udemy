const personas = [
  new Persona("Juan", "Perez"),
  new Persona("Billy", "Buttler"),
];

function mostrarPersonas() {
  console.log("Show person...");

  let texto = "";

  for (let persona of personas) {
    texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
  }
  document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
  const forma = document.forms["forma"],
    nombre = forma["nombre"],
    apellido = forma["apellido"];

  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  }else{
      alert("Los campos no deben estar vacíos.")
  }
}
