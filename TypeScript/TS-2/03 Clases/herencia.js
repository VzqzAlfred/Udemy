var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Padre = /** @class */ (function () {
    function Padre(_nombre, _edad) {
        this.nombre = _nombre;
        this.edad = _edad;
    }
    Padre.prototype.showName = function () {
        console.log("" + this.nombre);
    };
    return Padre;
}());
var Son = /** @class */ (function (_super) {
    __extends(Son, _super);
    function Son(_nombre, _edad, _apellido) {
        var _this = _super.call(this, _nombre, _edad) || this;
        _this.apellido = _apellido;
        return _this;
    }
    Son.prototype.showNameSon = function () {
        console.log(this.nombre + " " + this.apellido);
    };
    return Son;
}(Padre));
var newSon = new Son("Billy", 35, "Buttler");
newSon.showNameSon();
