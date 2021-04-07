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