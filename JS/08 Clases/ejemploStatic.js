class Person{

    static contadorPersonas = 0;

    static get MAX_OBJ(){
        return 5;
    }    

    constructor(name, surname){
        this._name = name;
        this._surname = surname;
        if(Person.contadorPersonas < Person.MAX_OBJ){
            this._idPersona = ++Person.contadorPersonas;
        }else{
            console.log("Se han superado el máximo de objetos de personas");
        }
    }
    get getName(){
        return this._name;
    }
    set setName(name){
        return this._name = name;
    }

    get getSurname(){
        return this._name;
    }
    set setSurname(surname){
        return this._surname = surname;
    }

    nameComplete(){
        return `${this._idPersona} ${this._name} ${this._surname}`;
    }

    // SObreescribiendo el método de la clase padre (Object)
    toString(){
        // Aplicando polimorfismo
        return `${this.nameComplete()}`
    }

    // Static
    // No es posible acceder a un static directamente, sino debe ir directamente al tipo de OBjeto
    static greeting(){
        console.log(`Greetings from static`);
    }

    static greeting2(person){
        console.log(person.name+` `+person.surname);
    }
}

class Empleado extends Person{
    constructor(name, surname, departamento){
        super(name, surname);   
        this._departamento = departamento;
    }

    get geDepartamento(){
        return this._departamento;
    }
    set setDepartamento(departamento){
        return this._departamento = departamento;
    }

    nameComplete(){
        return `${super.nameComplete()}, area: ${this._departamento}`
    }
}


let persona1 = new Person("Billy", "Buttler");
console.log(persona1);

let empleado1 = new Empleado("Homelander", "Deep", "System");
console.log(empleado1._departamento);
console.log(empleado1.nameComplete());



// Static
console.log(Person.greeting());
Person.greeting2(persona1)

Empleado.greeting2(empleado1);

console.log(persona1.toString());
console.log(empleado1.toString());

let persona2 = new Person('Karla', 'Torren');
console.log(persona2.toString());



// Constantes estáticas.
console.log(Person.MAX_OBJ);
Person.MAX_OBJ = 10;
console.log(Person.MAX_OBJ);

let persona3 = new Person('Marie', 'Lara');
let persona4 = new Person('Murph', 'Cooper');
let persona5 = new Person('Eddie', 'Bruck');
console.log(persona4.toString()); 