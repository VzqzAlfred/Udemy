"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    static metodoEstatico() {
        return 10;
    }
}
let person1 = new Person("Billy");
console.log(person1.getName());
console.log(Person.metodoEstatico());
