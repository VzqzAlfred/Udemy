let array = [1,2,"Hola",[10,20,30], 'un string'];

console.log(array);
console.log(array[3]);
console.log(array[3][2]);

let autos = Array(100).fill("Car");
console.log(autos);
console.log(autos.length);



const cities = new Array("CDMX", "New York", "Oslo", "Masachuttess");
console.log(cities);

for(let i = 0; i < cities.length; i++){
    console.log(`Value ${i}: '${cities[i]}'`);
}

/* Modify arrays */
cities[3] = "Estocolmo";
console.log(cities);
cities.push("Swedan");
console.log(cities);


cities[cities.length] = "Mosku";
console.log(cities);

cities[8] = "Tokyo"
console.log(cities);


console.log(typeof(array));
console.log(Array.isArray(array));
console.log(array instanceof Array);