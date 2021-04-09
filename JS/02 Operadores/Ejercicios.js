const numParImpar = num => {
    if(typeof(num) !== "number" || num === undefined){
        console.error("Por favor, ingrese un número.");
    }else if(num % 2 === 0){
        console.log(`El número ${num} es PAR`);
    }else{
        console.log(`El número ${num} es impar.`);
    }
}
numParImpar(5);
numParImpar("g");
numParImpar(16);
numParImpar("");
console.log("\n");



/****************************/

const age = n => {
    if(typeof(n) !== "number" || n === undefined){
        console.error("Por favor, ingrese un número.");
    }else if(n < 18){
        console.log(`${n} años es menor de edad`);
    }else{
        console.log(`${n} años es mayor de edad.`);
    }
}
age("jh");
age(84);
age(14);
age(18);