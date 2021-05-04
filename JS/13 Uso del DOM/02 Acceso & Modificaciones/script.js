console.log("Hola");

const d = document,
    $cabecero = d.getElementById("cabecera"),
    $parrafo = d.getElementById("parrafo");

console.log($cabecero);

console.log($cabecero.innerHTML);
$cabecero.style.color = "green";

console.log($parrafo.innerText);


d.addEventListener("mouseover", e => {
    e.preventDefault();
    if(e.target.matches("#cabecera")){
        $cabecero.style.color = "red";
    }else{
        $cabecero.style.color = "green"
    }
});

$parrafo.innerText = "Nuevo valor del parráfo";