let res = addEverything (5, 18, 16, 15, 3);

function addEverything(){
    let add = 0;
    for(let i = 0; i < arguments.length; i++){
        add += arguments[i];
    }    
    return add
}

console.log(res);



/* Paso por valor */
let x = 10;

function changeValue(a){
    a = 15;
}

changeValue(x);
console.log(x);



/* Paso por referencia */
const dog = {
    color: "Yellow",
    eyes: "small",
    age: 11
}
console.log(dog);

function changeValueObject(d1){
    d1.color = "Brown";
    d1.age = 1
}

changeValueObject(dog);
console.log(dog);