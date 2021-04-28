// Uso de try - catch  - finally en JS

"use strict";

try {
    let x = 10;
    throw 'Mi error';
} catch (error) {
    console.log(error);
} finally{
    console.log("Ejecutado siempre");
}


// Clausula throw
let res = "asdf";
try {
    if(isNaN(res)) throw 'El valor NO es un número';
    else if(res === '') throw "La cadena está vacía"
    else if(res  >= 0) throw "El valor es positivo"
    else if(res < 0) throw "El valor es negativo"
} catch (error) {
    console.log(error);
    //console.log(error.name);
    //console.log(error.message);
}