/* Método 'get' */

const cars = {
    name: "Jetta",
    mark: "volkswagen",
    year: 1937,
    country: "deutschland",
    get lang(){
        return this.country.toLocaleUpperCase();
    },
    get characteristics(){
        return `The car ${this.name} is a auto of ${this.mark} since ${this.year}`;
    },
    set lang(lang){
        this.country = lang.toLocaleUpperCase();
    }
}
// Con 'get' ya no es necesario colocar los '()'
console.log(cars.characteristics);



/* Uso de 'set' */
console.log(cars.lang);

cars.lang = "ES_MX";
console.log(cars.lang);
console.log("\n");



/* Constructores de objetos */
function Airplane(name, mark, year, country){
    this.name = name;
    this.mark = mark;
    this.year = year;
    this.country = country;

    this.characteristics = function(){
        return `It's a plane with name: ${this.name} since ${this.year}`
    }
}

Airplane.prototype.tel = '66995522';

let plane1 = new Airplane("Volvo", "Volaris", 1975, "england");
console.log(plane1);

let plane2 = new Airplane("Sunrest", "Volaris", 1980, "USA");
console.log(plane2);



/* Agregando métodos a Objetos */
console.log(plane1.characteristics());



/* Uso de prototype */
console.log(plane2.tel);

plane1.tel = '66997744';
console.log(plane1);