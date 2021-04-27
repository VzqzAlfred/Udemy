class Empleado{
    constructor(nombre, sueldo){
        this._nombre = nombre;
        this._sueldo = sueldo;
    }

    get getNombre(){
        return this._nombre;
    }
    set setNombre(newNombre){
        return this._nombre = newNombre;
    }

    get getSueldo(){
        return this._sueldo;
    }
    set setSueldo(newSueldo){
        return this._sueldo = newSueldo;
    }

    obtenerDetalles(){
        return `Empleado: nombre: ${this._nombre} sueldo: $${this._sueldo}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre, sueldo);
        this._departamento = departamento;
    }

    obtenerDetalles(){
        return `Gerente: ${super.obtenerDetalles()} depto: ${this._departamento}`
    }
}

function determinarTipo(type){
    console.log(type.obtenerDetalles());
    
    (type instanceof Gerente)
        ? console.log(`Es un objeto de tipo 'Gerente' en el dpto de: ${type._departamento}`)
        : console.log(`Es de tipo Empleado`);

        if(type instanceof Object){
            console.log(`Es de tipo Object`);
        }else{
            console.log("NO es de tipo Object");
        }
}

let e1 = new Empleado("Billy", 7000);

let g1  = new Gerente("Carl", 5000, "Sistemas");





/* Polimorfismo */  
// Se creo la función 'determinarTipo'
determinarTipo(e1);
determinarTipo(g1)




/* Uso de instance of */