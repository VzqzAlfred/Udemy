function mf(){
    console.log("Mi Función 1");
}

function f2(){
    console.log("Mi Función 2");
}

mf();
f2();

// Uso de Callback
let imp = function print(msg){
    console.log(msg);
}

function sum(a,b, callback){
    let res = a+b;
    callback("Resultado: "+res);
}


// Uso de setTimeOut()

setTimeout(() => {
    sum(5,8, imp);
    console.log("Saludo después de 2.5 segundos.");
}, 2500);


// Uso de setInterval()
setInterval(() => {
   console.log(new Date().toLocaleTimeString()); 
}, 1000);