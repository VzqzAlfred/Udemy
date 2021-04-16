/* Clases */

class Animal{
    constructor(name, specie){
        this._name = name;
        this._specie = specie;
    }

    get nombre(){
        return `${this._name}`;
    }

    set specie(specie){
        this._specie = specie;
    }
}

let animal1 = new Animal("Buggs", "Conejo");
console.log(animal1);

let animal2 = new Animal("Mickey", "Ratón");
console.log(animal2);



/* Métodos get y set */
console.log(animal1.nombre);
animal1.specie = 'Conejillo';
console.log(animal1);