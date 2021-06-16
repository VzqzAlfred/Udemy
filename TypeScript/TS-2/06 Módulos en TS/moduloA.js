"use strict";
exports.__esModule = true;
exports.show = exports.nombre = void 0;
exports.nombre = 'Billy';
var Person = /** @class */ (function () {
    function Person(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }
    Person.prototype.info = function () {
        console.log(this.name);
    };
    return Person;
}());
var show = function () {
    console.log('Showing');
};
exports.show = show;
exports["default"] = Person;
