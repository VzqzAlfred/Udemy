var Animal = /** @class */ (function () {
    function Animal(_nombre, _tamanio) {
        this.nombre = _nombre;
        this.tamanio = _tamanio;
    }
    Animal.prototype.moverse = function () {
        console.log("Me estoy moviendo");
    };
    return Animal;
}());
var anim = new Animal("Serpiente", 3);
anim.moverse();
anim.nombre;
anim.tamanio;
var Animales = /** @class */ (function () {
    function Animales(_nombre, _tamanio) {
        this.nombre = _nombre;
        this.tamanio = _tamanio;
    }
    Animales.prototype.moverse = function () {
        console.log("Me estoy moviendo");
    };
    return Animales;
}());
var a = new Animales("Ratón", 0.5);
a.moverse();
