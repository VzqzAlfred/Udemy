const personas = [
    new Persona('Juan', 'Perez'),
    new Persona('Billy', 'Buttler')
];

function mostrarPersonas(){
    console.log("Show person...");

    let texto = '';

    for (let persona of personas) {
        
        texto += `<li>${persona._nombre} ${persona._apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}