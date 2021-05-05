const d = document;

const $title = d.getElementById("title");
function mostrar(){
   
    $title.innerHTML += "<br/>Nuevo título";
    
    
    const $img = d.getElementById("imagen");
    $img.src = 'https://images.unsplash.com/photo-1610568781018-995405522539?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80';
    
    
    $title.style.textAlign = "center"
    $title.style.color = 'green'
}