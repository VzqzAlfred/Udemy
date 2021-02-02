/*Manejo de Variables.*/
document.write("<h2>Manejo de variables</h2>");
let x=9.654;
var y=3.01;
const z=x+y;
document.write("El resultado es: "+z);





/*****Manejo de Tipos de Datos*****/
document.write("<h2>Manejo de tipos de Datos</h2>");

//Cadenas (String)
document.write("<h3> - Tipo string</h3>");
let cadena = "Hi amigos, soy una cadenita";
document.write(cadena);

//Números
document.write("<h3> - Tipo number</h3>");
let num1 = 5;
let num2 = parseInt("25");
var num3 = num1 + num2;
document.write("Valor de num1: "+num1);
document.write("<br>Valor de num2: "+num2);
document.write("<br>Soy el valor de num3, siendo la suma xd "+num3);

//Boolean
document.write("<h3> - Tipo Boolean</h3>");
let boleanito = true;
var res = (num1 == num2);
document.write("El resultado para un número booleano es: "+res);

//null
document.write("<h3> - Tipo 'null'</h3>");
var tipoNull = null;
document.write("Valor tipo null: "+tipoNull);

//Indefinido
document.write("<h3> - Tipo 'undefined'</h3>");
let tipoUndefined;
document.write("Valor tipo indefinido: "+tipoUndefined);

//Tipo de dato
document.write("<h3> - Método 'typeof()'</h3>");
document.write("<brEl tipo de dato para el booleano es: "+ typeof(boleanito));
document.write("<br>El tipo de dato para el string es: "+ typeof(cadena));
console.log(typeof(cadena));





    /********** Manejo de Tipos de Operadores **********/
document.write("<h2><br>Manejo de tipos de OPERADORES</h2>");
document.write("+, -, %, &&, ||, ++ = x+1, += , --, ");





    /********** Manejo de Tipos de Funciones **********/
document.write("<h2><br>Manejo de tipos de FUNCIONES</h2>");

function myFunction1(){
    alert("Usted ha provocado que se ejecute la Funcción 1.");
}

const myFunction2 = () =>{
    let numberRandom = parseInt( prompt("Hello, You've executed the function 2 \n Insert a number:", "Any number ") );
    
    if (numberRandom >= 0 || numberRandom <= 0){
        alert("You HasYour number was: "+numberRandom);
    }else {
        alert("Sorry, you didn't typed a number :(");
    }
};

const mostrarName = (name) => {
    nombre = name.value;
    console.log(nombre);
    alert("Hi " + nombre+ " since function 'mostrarName'");
};





    /********** Manejo de Tipos de Funciones **********/

const showName = (name) => {
   let nombre = name.value;
   let saludo = "Hi "+nombre.toUpperCase();
   document.getElementById("resultado").innerHTML = `<i>${saludo}</i>`;
};






    /********** Manejo de Variables Locales y Globales**********/
    
let nombre_global = null;
    
const saludar = (name) => {
    let nombre = name.value;
    let saludo = "Hola de nuevo " + nombre;
    document.getElementById("gretting").innerHTML = `<i>${saludo}</i>`;
};

const variableGlobal = () => {
    alert("Hi "+ nombre_global);
};

const variableLocal = () => {
    let nombre_local = "Soy una variable local";
    alert("Hi "+nombre_local);
};