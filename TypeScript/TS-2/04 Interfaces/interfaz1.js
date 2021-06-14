function walk(person) {
    console.log("The person " + person.name + " " + person.surname + " is walking");
}
var newPerson = { name: "Alfred", surname: "Vzqz" };
walk(newPerson);
console.log("\n\n");
var mascota = { altura: 2, peso: 95 }, mascota2 = { name: "Gretchen", peso: .95, altura: 1 };
function MostrarMediaPeso(mascota) {
    var pesoPromedio = mascota.altura / mascota.peso;
    if (mascota.name) {
        return mascota.name + " tiene una media de " + pesoPromedio;
    }
    else {
        return "No s\u00E9 qui\u00E9n eres, pero tienes una media de " + pesoPromedio;
    }
}
console.log(MostrarMediaPeso(mascota));
console.log(MostrarMediaPeso(mascota2));
