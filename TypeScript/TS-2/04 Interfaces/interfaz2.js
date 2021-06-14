// readonly:  Hace que no puedas modificarlo
var person = { name: "Tommy", surname: "Shelby" };
//person.name = "Arthur";
console.log(person);
console.log("\n\n");
var funcionGeneral1;
funcionGeneral1 = function (name, surname, age) {
    console.log(name + " with the surname " + surname + " and " + age + " years");
};
funcionGeneral1("Jimmy", "Bottom", 35);