const d = document,
    $nombre = d.getElementById("nombre"),
    $apellido = d.getElementById("apellido"),
    $forma = d.getElementById("forma");

$forma.addEventListener("focus", e => {
    change();
}, true);
$forma.addEventListener("blur", e => {
    changeback()
}, true); 


function change(evento){
    $nombre.style.background = "yellow";
}

function changeback(){
    $nombre.style.background = "white";
}