const animal1 = {
    name: "Buggs",
    surname: "Bunny",
    nameComplete: function(title, tel){
        
        //return `${this.name} ${this.surname}`;
        return `${title} ${this.name} ${this.surname} ${tel}`;
    }
}

const animal2 = {
    name: "Mickey",
    surname: "Mouse"
}


/* Uso de call para llamar la función de un objeto */
console.log(animal1.nameComplete("Lic.", "44771122"));

console.log(animal1.nameComplete.call(animal2, "Ing:", "44778822"));





/* Uso de Appply */
console.log(animal1.nameComplete('IFB', '99887711'));

let array = ["IQF", "2233665450"];
console.log(animal1.nameComplete.apply(animal2,array));