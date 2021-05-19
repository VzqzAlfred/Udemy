class Dato{
    constructor(descripcion, valor){
        this._descripcion = descripcion;
        this._valor = valor;
    }

    get getDescripcion(){
        return this._descripcion;
    }

    set setDescripcion(newDescripcion){
        this._descripcion = newDescripcion;
    }


    get getValor(){
        return this._valor;
    }

    set setValor(newValor){
        this._valor = newValor;
    }
}