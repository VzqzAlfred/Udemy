class  DispositivoEntrada{
    constructor(tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get getTipoEntrada(){
        return this._tipoEntrada;
    }
    set setTipoEntrada(newTipoEntrada){
        return this._tipoEntrada = newTipoEntrada;
    }

    get getMarca(){
        return this._marca;
    }
    set setMarca(newMarca){
        return this._marca = newMarca;
    }
}



class Raton extends DispositivoEntrada{
    static contadorRatones = 0;
    constructor(){
        this._idRaton = ++Raton.contadorRatones;
    }

    get getidRaton(){
        return this._idRaton;
    }

    toString(){
        return `${this._idRaton}`
    }
}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(){
        this._idTeclado = ++Raton.contadorTeclados;
    }

    get getidTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `${this._idTeclado}`
    }
}


class Monitor{
    static contadorMonitores = 0;
    constructor(marca, tamanio){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamanio = tamanio;
    }

    get getidMonitor(){
        return this._idMonitor;
    }

    get getMarca(){
        return this._marca;
    }
    set setMarca(newMarca){
        return this._marca = newMarca;
    }

    get getTamanio(){
        return this._tamanio;
    }
    set setTamanio(newTamanio){
        return this._tamanio = newTamanio;
    }

    toString(){
        return `${this._idMonitor}: marca:${this._marca} y tamaño: ${this._tamanio}`;
    }
}


class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, teclado, raton){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._teclado = teclado;
        this._raton = raton;
    }

    get getidComputadora(){
        return this._idComputadora;
    }

    get getNombre(){
        return this._nombre;
    }
    set setNombre(newNombre){
        return this._nombre = newNombre;
    }

    get getMonitor(){
        return this._monitor;
    }
    set setMonitor(newMonitor){
        return this._monitor = newMonitor;
    }

    get getTeclado(){
        return this._teclado;
    }
    set setTeclado(newTeclado){
        return this._teclado = newTeclado;
    }

    get getRaton(){
        return this._raton;
    }
    set setRaton(newRaton){
        return this._raton = newRaton;
    }

    toString(){
        return `${this._idComputadora}: Nombre: ${this._nombre} usando un monitor ${this._monitor}, teclado: ${this._teclado} y un raton ${this._raton}`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._idComputadoras = []
    }
}