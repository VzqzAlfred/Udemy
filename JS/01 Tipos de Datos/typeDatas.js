/* Tipos de Datos */

// Simbolos
var flag = true;
console.log(!flag);
console.log(typeof(flag));


// Funciones
function myFunction(){}
console.log(myFunction);
console.log(typeof(myFunction));


// Simbolos
var simbol = Symbol("mi simbolo");
console.log(typeof(simbol));
console.log(simbol);


// Clases
class Person {
    constructor(nombre, apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}

console.log(Person);
console.log(typeof(Person));


// Undefined
var x;
console.log(x);


// Null     "Ausencia de valor"
var y = null;
console.log(y);
console.log(typeof(y));


// Arreglos
var cars = ["Aveo", "BMW", "Audi"];
console.log(cars);
console.log(typeof(cars));


// Valores vacío
var z = '';
console.log(z);
console.log(typeof(z));