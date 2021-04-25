class Producto{
    static contadorProducto = 0;
    constructor(nombre, precio){
        this._nombre = nombre;
        this._precio = precio;

        (Producto.contadorProducto <= 10)
            ? this._idProducto = ++Producto.contadorProducto
            : console.log(`El  límite para poder crear productos es de ${Producto.contadorProducto}`);
    }

    get getidProducto(){
        return this._idProducto;
    }

    get getNombre(){
        return this._nombre;
    }
    set setNombre(newNombre){
        return this._nombre = newNombre;
    } 

    get getPrecio(){
        return this._precio;
    }
    set setPrecio(newPrecio){
        return this._precio = newPrecio;
    } 

    toString(){
        return `${this._idProducto}: ${this._nombre} with a cost of $${this._precio} pesos.`;
    }
}

class Orden{
    static contadorOrdenes = 0;

    static get MAX_PRODUCTOS(){
        return 5;
    }

    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._productos = [];
    }

    get getidOrden(){
        return this._idOrden;
    }

    agregarProducto(producto){
        (this._productos.length < Orden.MAX_PRODUCTOS)
            ? this._productos.push(producto)
            : console.log(`El máximo para poder agregar productos es de ${Orden.MAX_PRODUCTOS}`);   
    }

    calcularTotal(){
        let totalVenta = 0;
        for (let producto of this._productos) {
            totalVenta += producto.getPrecio;
        }
        return totalVenta;
    }

    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos) {
            productosOrden += '\n{' + producto.toString() + '} ';
        }

        console.log(`Orden: ${this._idOrden} Total: ${this.calcularTotal()}, Productos: ${productosOrden}`);
    }
}



let producto1 = new Producto("Cheetos", 11.5);
let producto2 = new Producto("Gansito", 8)
//console.log(producto1.toString());

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);

orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto("Paleta Magnum", 28);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto2);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto3);
orden2.mostrarOrden();