import { nombre, Human, show } from "./moduloA";
import Person from "./moduloA";

import * as paquete from "./moduloA"

console.log(nombre);

const humano:Human = {name: "Sam"}

show()

paquete.show()


const person = new Person("Lyly", "Potter", 35);
person.info()