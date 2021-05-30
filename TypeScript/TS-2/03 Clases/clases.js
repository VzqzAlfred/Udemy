var Vehiculo = /** @class */ (function () {
    function Vehiculo(marca_, fecha_, puertas_) {
        this.marca = marca_;
        this.fecha = fecha_;
        this.puertas = puertas_;
    }
    Vehiculo.prototype.acelerar = function () {
        console.log(this.marca + " " + "Acelerando...");
    };
    Vehiculo.prototype.frenar = function () {
        console.log("Frenando...");
    };
    return Vehiculo;
}());
var coche = new Vehiculo("Volkswagen", "12/01/1925", 4);
coche.acelerar();
