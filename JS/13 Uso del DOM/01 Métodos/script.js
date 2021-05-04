const d = document,
    $parrafos = d.getElementsByTagName('p');        // ByTagName(''): Debe tener una etiqueta HTML

console.log($parrafos);
console.log("Número de parráfos: "+$parrafos.length);

for (let element of $parrafos) {
    console.log(element.innerText);
}


/* getElementByClassName */         // Selecciona el nombre de una clase

let classParrafos = d.getElementsByClassName('blue');

console.log(classParrafos);
for (const el of classParrafos) {
    console.log(el);
    console.log(el.innerHTML);
}


/* querySelectorAll */
let elementos = d.querySelectorAll('p.blue');
console.log(elementos);
console.log(elementos.length);
for (const e of elementos) {
    console.log(e.innerHTML);
}