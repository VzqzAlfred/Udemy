/* Operador lógico AND */

let a = 15,
    valMin = 0,
    valMax = 10;

(a >= valMin && a <= valMax) ? console.log("Dentro de rango.") : console.log("Fuera de rango");



/* Operador lógico OR */

let holiday = true,
    dayRest = false;

(holiday || dayRest) ? console.log("He can go to play") : console.log("He's busy"); 



/* De String a Number */
let cad = "7b";
console.log(typeof cad);
let cadNum = Number(cad)
console.log(typeof(cadNum));



/* isNAN */
(isNaN(cadNum)) 
? console.log(`${cadNum} is not a number`)
: (cadNum >= 18) 
    ? console.log("Can vote")
    : console.log("Can't vote"); 



/* Precedencia de operadores. */
let x1 = 5,
    x2 = 10,
    x3 = ++x1 + x2--;       // 6 + 10
console.log(x1, x2, x3);

let r = 4 + 5 * 6 / 3;
console.log(r);

r = (5+4) * 6 / 3;
console.log(r);