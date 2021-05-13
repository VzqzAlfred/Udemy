class Persona{
    constructor(nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido
    }

    get getNombre(){
        return this._nombre;
    }

    set setNombre(newNombre){
        return this._nombre = newNombre;
    }

    get getApellido(){
        return this._apellido;
    }

    set setApellido(newApellido){
        return this._apellido = newApellido;
    }
}