function myF(a,b){
    let c = a + b;
    console.log(arguments);
    console.log(`Cantidad:` ,arguments.length);
    return console.log(c);
}
myF(5,5);



/* Funciones de Tipo expresión */
let x = function(a,b){
    return a+b;
};
let res = x(10,25);
console.log(res); 



/* Funciones autoejecutadas */
(function(a,b){
    console.log("Ejecutando una función autoejecutable", a+b);
})(3,5);



/* Funciones como objetos */
var miFuncionTexto = myF.toString();
console.log(miFuncionTexto);
console.log(typeof(miFuncionTexto));



/* Funciones flecha */
const resta = (x,y) => {
    let res = x - y;
    return res;
}
res = resta(18,6);
console.log(res);