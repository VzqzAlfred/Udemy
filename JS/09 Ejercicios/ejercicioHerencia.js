class Person{

    static count = 0;

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        this._edad = edad;
        
        Person.count <= 10 
            ? this._idPersona = ++Person.count
            : console.log(`No puedes crear más de ${Person.count} personas.`);
    }

    get getidPersona(){
        return this._idPersona;
    }

    get getNombre(){
        return this._nombre;
    }
    set setNombre(nombre){
        return this._nombre = nombre;
    }

    get getApellido(){
        return this._apellido;
    }
    set setApellido(apellido){
        return this._apellido = apellido;
    }

    get getEdad(){
        return this._edad;
    }
    set setEdad(edad){
        return this._edad = edad;
    }

    aboutPeople(){
        return `${this._idPersona} with name: '${this._nombre} ${this._apellido}' and ${this._edad} years.`;
    }

    toString(){
        return `${this.aboutPeople()}`
    }
}


class Empleado extends Person{
    constructor(idEmpleado, sueldo){
        this._idEmpleado = idEmpleado;
        this._sueldo = sueldo;
    }

    get getidEmpleado(){
        return this._idEmpleado;
    }

    get getSueldo(){
        return this._edad;
    }
    set setSueldo(sueldo){
        return this._sueldo = sueldo;
    }

    aboutPeople(){
        return `${this._idEmpleado} win $${this._sueldo} dolars.`;
    }
}



class Cliente extends Person{
    constructor(idCliente, fechaRegistro){
        this._idCliente = idCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get getidCliente(){
        return this._idCliente;
    }

    get getfechaRegistro(){
        return this._edad;
    }
    set setfechaRegistro(newfecha){
        return this._fechaRegistro = newfecha;
    }

    aboutPeople(){
        return `${this._idCliente} entered to job the ${this._fechaRegistro}`;
    }
}


let p = new Person("Eddie", "Bruck", "25");
console.log(p._idPersona);
console.log(p.toString());