
const validarForma = (forma) => {
    let usuario = forma.usuario;

    if(usuario.value == "" || usuario.value == "Escribir usuario"){
        alert(`Debe proporcionar un nombre de usuario.`);
        usuario.focus();
        usuario.select();
        return false;
    }

    let password = forma.password;
    if (password.value == "" || password.value.length < 3){
      alert(`Ingrese una contraseña al menos de 3 caracteres`);
      password.focus();
      password.select();
      return false;
    }
    
    let tecnologias = forma.tecnologia;
    let checkSeleccionado = false;
    for (let i = 0; i < tecnologias.length; i++) {
        if (tecnologias[i].checked) {
            checkSeleccionado = true;
        }
    }

    let generos = forma.genero;
    let radioSeleccionado = false;
    for (let i = 0; i < generos.length; i++) {
        if (generos[i].checked) {
            radioSeleccionado = true;
        }
    }
    if (!radioSeleccionado) {
        alert("Debe seleccionar un campo de género.");
        return false;
    }

    let ocupacion = forma.ocupacion;
    if (ocupacion.value == "") {
        alert("Debe seleccionar alguna ocupación");
        return false;
    }

    alert("Formulario válido, enviando datos...");
    return true;
}
