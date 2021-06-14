interface Person{
    name:string
    surname:string
}

function walk(person:Person):void{
    console.log("The person " + person.name + " " + person.surname + " is walking");
}

let newPerson = { name: "Alfred", surname: "Vzqz" }
walk(newPerson);
console.log("\n\n");



/* PARÁMETROS OPCIONALES EN LA SINTERFACES */

interface Mascota{
    name?:string;
    peso:number;
    altura:number;
}

let mascota = {altura:2,peso:95},
    mascota2 = {name:"Gretchen", peso:.95, altura:1}

function MostrarMediaPeso(mascota:Mascota):string{
    let pesoPromedio:number = mascota.altura / mascota.peso;

    if(mascota.name){
        return `${mascota.name} tiene una media de ${pesoPromedio}`;
    }else{
        return `No sé quién eres, pero tienes una media de ${pesoPromedio} Kg`;
    }
}

console.log(MostrarMediaPeso(mascota));
console.log(MostrarMediaPeso(mascota2));