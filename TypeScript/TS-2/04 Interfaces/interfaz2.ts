// readonly:  Hace que no puedas modificarlo

interface Person{
    readonly name:string;
    readonly surname:string;
}

let person:Person = {name:"Tommy", surname: "Shelby"}

//person.name = "Arthur";
console.log(person);
console.log("\n\n");






/* Interfaces para funciones */

interface General{
    (name:string, surname:string, age:number):void    
}

let funcionGeneral1:General
funcionGeneral1 = function(name:string, surname:string, age:number):void{
    console.log(`${name} with the surname ${surname} and ${age} years`);
}

funcionGeneral1("Jimmy", "Bottom", 35);