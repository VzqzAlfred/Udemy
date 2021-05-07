const d = document;

/* Uso de onload */
function entrar(){
    alert("Aplicando onload");
    let text = '';
    if(navigator.cookieEnabled){
        text = "Las cookies están habilitadas";
    }else{
        text = "Cookies inabilitadas";
    }

    d.getElementById("mostrar").innerHTML = text;
}



/* Uso de onchange */
function convertir(nombreInput){
    nombreInput.value = nombreInput.value.toUpperCase();
}



/* onmouseout & onmouseover */
const $title = d.getElementById("title")
function rojo(){
    $title.style.color = "red";
}

function verde(){
    $title.style.color = "green";
}



/* onmousedown, onmouseup & onclick */
const $subtitle = d.getElementById("subtitle");

function blue(){
    console.log("onmousedown cambio a azul");
    $subtitle.style.color = "blue";
}

function pink(){
    console.log("onmouseup cambio a rosa");
    $subtitle.style.color = "pink";
}

function yellow(subtitle){
    console.log("click cambio a amarrillo");
    $subtitle.style.color = "yellow";
}



/* onfocus & onblur */
function cambiar(elementoInput){
    elementoInput.style.background = "yellow";
}

function regresar(elementoInput){
    elementoInput.style.background = "white";
}