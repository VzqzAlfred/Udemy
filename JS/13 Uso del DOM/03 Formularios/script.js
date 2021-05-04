const d = document;
function mostrarValores(){
    let formulario = d.forms['formulario'];

    let texto = '';
    
    // for (const elemento of formulario) {
    //     texto += elemento.value + '<br/>';
    // }

    let nombre = formulario['nombre'];
    let apellido = formulario['apellido'];
    console.log(nombre);
    console.log(apellido);

    texto = nombre.value + '<br/>' + apellido.value;
    
    d.getElementById("valores").innerHTML = texto;
}


// Uso de document.write

d.write("Saludos desde document.write('')");

function mostrar(){
    d.write("Adios")
}

