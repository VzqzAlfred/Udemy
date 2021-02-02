
/*
 let number = parseInt( prompt("Insert a number:",'tecla un número') );
 
 if(number >= 0){
 if(number % 2 == 0){
 document.write("El numero "+number+" es par.");
 }else if(number % 2 == 1) {
 document.write("El número "+number+" es impar.");
 }
 }else if(number <= 0){
 document.write("El numero "+number+" debe ser mayor a cero.");
 } else{
 let number = parseInt( prompt("Insert a number:",'tecla un número') );
 }*/

/**** ALGORITMO PARA CONTAR LA CANTIDAD DE DÍGITOS DE UN NÚMERO *****/

let number = parseInt(prompt("Insert a number positive:", 'tecla un número'));
let contador = 0;

while (number >= 1) {
    number = number / 10;
    contador ++;
}

document.write("El número tiene " + contador + " dígitos")