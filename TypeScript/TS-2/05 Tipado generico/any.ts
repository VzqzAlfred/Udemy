const nombre:string = 'Billy';
const num:number = 37;
let dontKnow:any = 'quiensabe';





/* Funciones genéricas */
function show(data:string):string{
    return data;
}
console.log(show("Billy"));



function showGeneric<T>(data:T):T{
    return data
}

const d = showGeneric("Ma"),
      f = showGeneric(18);
f.toString();
d.toLocaleUpperCase();
console.log(showGeneric(34));





/* Clases genericas */

class Person<T>{
    name:string
    age:T

    Show:(data:T) => T
}

const obj = new Person()





/* Interfaces genéricas */

interface Mascota<T>{
    name: T
}

let object:Mascota<string> = {name:'Tommy'},
    n:Mascota<number> = {name:5}