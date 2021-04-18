/* Herencia */

class Person{
    constructor(name, surname){
        this._name = name;
        this._surname = surname;
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
        return `${this._name} ${this._surname}`;
    }

    // SObreescribiendo el método de la clase padre (Object)
    toString(){
        // Aplicando polimorfismo
        return `${this.nameComplete()}`
    }
}

class Empleado extends Person{
    constructor(name, surname, departamento){
        super(name, surname);   //Llamando el constructor de la clase Padre
        this._departamento = departamento;
    }

    get geDepartamento(){
        return this._departamento;
    }
    set setDepartamento(departamento){
        return this._departamento = departamento;
    }

    // Sobreescritura
    nameComplete(){
        return `${super.nameComplete()}, area: ${this._departamento}`
    }
}


let persona1 = new Person("Billy", "Buttler");
console.log(persona1);

let empleado1 = new Empleado("Homelander", "Deep", "System");
console.log(empleado1._departamento);
console.log(empleado1.nameComplete());



/* Sobreescritura */
console.log(empleado1.nameComplete());



/* Object y Polimorfismo */
console.log(`Méthod 'toString()` , empleado1.toString());