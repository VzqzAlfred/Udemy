/* Aritméticos */

let a = 3,
    b = 6,
    c = a+b;
console.log(c);

c = a - b;
console.log(c);
c = a*b;
console.log(c);
c = a / b;
console.log(c);
c = a % b;
console.log(c);
c = a ** b;
console.log(c);



/* Incremento y decremento */

//! Incremento
// Pre-incremento (++ antes de la variable)
c = ++a;
console.log(`Pre-incremento 'a': ${a}, c: ${c}`);

// Post-incremento (++ después de la variable.)
c = b++;
console.log(`Post-incremento 'b': ${b}, c: ${c}`);


// Decremento
// Pre-decremento (-- antes de la variable)
c = --a;
console.log(`Pre-decremento 'a': ${a}, c: ${c}`);

// Post-decremento (-- después de la variable.)
c = b--;
console.log(`Post-decremento 'b': ${b}, c: ${c}`);



/* Precedencia de valores */
let x = 3,
    y = 2,
    z = 1,
    d = 4;

let k = z + x * y;
console.log(k);

k = x * y + z / d;
console.log(k);

k = z + x * y / d;
console.log(k);

k = (z + x) * y / z;
console.log(k);



/* Asignación. */
/*
    a += 3;     a = a + 3
    a -= 4;     a = a - 4
    a *= 5;
    a /= 6;
*/



/* Comparación */
let var1 = 3,
    var2 = 2,
    var3 = "3";

let res = var1 == var3;     // Se revisa el valor sin importar el tipo de datos   
console.log(res);

res = var1 === var3;        // Revisa los valores y también el tipo de datos.
console.log(res);

res = var1 != var3;
console.log(res);

res = var1 !== var3;
console.log(res);


/* Relacionales     <,>,<=,>= */
res = var1 < var2;
console.log(res);

res = var1 >= var3;
console.log(res);