
const d = document,
    $subtitle = d.getElementById("subtitle"),
    $div = d.getElementById("show");

function cambiarTexto(titulo){
 console.log(titulo); 
 console.log(titulo.innerHTML);  
 titulo.innerText = "New Title again xd";
 console.log(titulo.innerText);
}

$subtitle.onclick = changeText;

function changeText(){
    $subtitle.innerText = 'new Subtitle';
    $div.innerText = 'Hola'
}

