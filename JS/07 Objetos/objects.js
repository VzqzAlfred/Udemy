const dog = {
    name: "Tom",
    color: "brown",
    age: 12,
    eyes: "blue",
    ladrar: function(){
        console.log("Ladrar: Guau...");
    },
    caracteristicas: function(){
        console.log(`En las noches ${this.name}, de color ${this.color} corre en la sotea.`);
    }
}

dog.ladrar();
dog.caracteristicas();



/* Creación de Objectos */
let dog2 = new Object();
dog2.name = "Madds";
dog2.direction = "Vicente Guerrero";
console.log(dog2);



/* Accediendo a propiedades de un Objetos */
console.log(`Dog1: ${dog['name']} - Dog2: ${dog2['name']}`);
for(propiedad in dog2){
    console.log(propiedad);
    console.log(dog2[propiedad]);
}



/* Agregando y eliminando propiedades a objetos */
dog.weight = 3.2;
dog.appeareance = "fat";
console.log(dog);

dog.weight = 3.8;
console.log(dog);

delete dog.appeareance;
console.log(dog);



/* Imprimir objetos */
for (let valuePropertie in dog2) {
    console.log(valuePropertie);
    console.log(dog2[valuePropertie]);
}
console.log("\n");
console.log("-------------------------");


console.log(Object.keys(dog));
console.log(Object.values(dog));


let perrito = JSON.stringify(dog2);
console.log(perrito);