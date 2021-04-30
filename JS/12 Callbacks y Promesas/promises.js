let myPromise = new Promise((resolve, reject) => {
    let expression = true;

    if(expression){
        resolve('Se resolvió correctamente');
    }
    else{
        reject("Se produjo un error");
    }
}); 

myPromise.then(
    value => console.log(value),
    error => console.log(error)
);

myPromise.then(value => console.log(value)).catch(error =>console.log(error))