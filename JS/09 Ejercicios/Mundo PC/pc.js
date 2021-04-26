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
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idRaton = ++Raton.contadorRatones;
    }

    get getidRaton(){
        return this._idRaton;
    }

    toString(){
        return `Raton: ${this._idRaton}, tipo entrada: ${this._tipoEntrada}, marca: ${this._marca}`
    }
}



class Teclado extends DispositivoEntrada{
    static contadorTeclados = 0;
    constructor(tipoEntrada, marca){
        super(tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get getidTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `Teclado: ${this._idTeclado} tipo de entrada: ${this._tipoEntrada}, marca: ${this._marca}`;
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

    toString(){
        return `Monitor: ${this._idMonitor}: marca: ${this._marca} y tamaño: ${this._tamanio}`;
    }
}


class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras;
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    get getidComputadora(){
        return this._idComputadora;
    }

    toString(){
        return `Computadora: ${this._idComputadora}: Nombre: ${this._nombre} \n Usando un ${this._monitor}, \n ${this._teclado} \n ${this._raton}`;
    }
}


class Orden{
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = [];
    }

    get getidOrden(){
        return this._idOrden;
    }

    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    mostrarOrden(){
        let computadorasOrden = '';
        for (let computadora of this._computadoras) {
            computadorasOrden += `\n${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`);
    }
}

let r1 = new Raton('USB', 'HP');
console.log(r1.toString());
let r2 = new Raton('Bluetooth', "Dell");
r2.setMarca = 'HP';
console.log(r2.toString());

let t1 = new Teclado('Bluetooth', "MSI");
let t2 = new Teclado('USB', 'Acer');
console.log(t1.toString());
console.log(t2.toString());

let m1 = new Monitor('HP', 15);
let m2 = new Monitor('Dell', 27);
console.log(m1.toString());
console.log(m2.toString());

let c1 = new Computadora('HP', m1, r1, t1);
console.log(`${c1}`);
let c2 = new Computadora('Armada', m2, r2, t2);
console.log(`${c2}`);
console.log(`\n\n`);

let orden1 = new Orden();
orden1.agregarComputadora(c1);
orden1.agregarComputadora(c2);
orden1.agregarComputadora(c2);
orden1.mostrarOrden();
console.log(`\n`);

let orden2 = new Orden();
orden2.agregarComputadora(c2);
orden2.agregarComputadora(c1);
orden2.mostrarOrden();