let myPromise = new Promise((resolve, reject) => {
    let expression = true;

    if(expression){
        resolve('Se resolvió correctamente');
    }
    else{
        reject("Se produjo un error");
    }
}); 

// myPromise.then(
//     value => console.log(value),
//     error => console.log(error)
// );

//myPromise.then(value => console.log(value)).catch(error =>console.log(error));
console.log("\n");





/* setTimeout y Promises */
let prom = new Promise((resolve) => {
    setTimeout(() => {
        resolve('Saludos con promesas y setTimeout')
    }, 2500);
    //console.log("Fin de la promesa");
});
//prom.then(value => console.log(value));




/* Async en promesas */
// Async: Indica que una función va a regresar una promesa.

async function myFunctionWithPromise(){
    return 'Saludos con promesa y Async';
}

//myFunctionWithPromise().then(value => console.log(value));
console.log("\n");





/* Await y async */
// await siempre va dentro de una función ASYNC

async function functionWithPromiseAndAwait(){
    let myPromise = new Promise(resolve => {
        resolve('Promise with AWAIT')
    });

    console.log(await myPromise);
    console.log();
}
//functionWithPromiseAndAwait();





/* Promesas, await, async y setTimeout */
async function functionWithPromiseAwaitAndTimeout(){
    console.log("Inicio de la función");
    console.log("Loading...");
    let myPromise = new Promise(resolve => {
        setTimeout(() => {
            resolve("Promesa con Await y setTimeout");
            console.clear();
        }, 3500);
    });
    console.log(await myPromise);
    console.log("FIN de la promesa async, await y setTimeOut");
}

functionWithPromiseAwaitAndTimeout();