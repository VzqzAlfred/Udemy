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

    toString(){
        return `${this._idPersona}: name: ${this._nombre} ${this._apellido} is ${this._edad}`
    }
}



class Empleado extends Person{
    static contadorEmpleados = 0;

    constructor(nombre, apellido, edad, sueldo){
        super(nombre, apellido, edad)
        this._idEmpleado = ++Empleado.contadorEmpleados;
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

    toString(){
        return `${super.toString()} ${this._idEmpleado} win $${this._sueldo} dolars.`;
    }
}



class Cliente extends Person{
    
    static contadorCliente = 0;

    constructor(nombre, apellido, edad, fechaRegistro){
        super(nombre, apellido, edad)
        this._idCliente = ++Cliente.contadorCliente;
        this._fechaRegistro = fechaRegistro;
    }

    get getidCliente(){
        return this._idCliente;
    }

    get getfechaRegistro(){
        return this._fechaRegistro;
    }
    set setfechaRegistro(newfecha){
        return this._fechaRegistro = newfecha;
    }

    toString(){
        return `${super.toString()} ${this._idCliente} entered to job the ${this._fechaRegistro}`;
    }
}


let p = new Person("Eddie", "Bruck", "25");
console.log(p._idPersona);
console.log(p.toString());


let empleado1 = new Empleado("Annie", "White", 28, 5000);
console.log(empleado1.toString());

let c = new Cliente("Hugie", "Kawald", 27, new Date().toLocaleDateString());
console.log(c.toString());