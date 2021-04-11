let array = [1,2,"Hola",[10,20,30], 'un string'];

console.log(array[3]);
console.log(array[3][2]);

let autos = Array(100).fill("Car");
console.log(autos);
console.log(autos.length);

autos.forEach((el, i) => {
    console.log(`${i}.- ${el}`);
})