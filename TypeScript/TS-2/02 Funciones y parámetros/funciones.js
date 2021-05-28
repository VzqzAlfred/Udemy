function add(a, b) {
    return a + b;
}
var sum = add(2, 5);
console.log(sum);
function show() {
    console.log("function one :(");
}
var show2 = function (a) {
    console.log("Hi " + a);
};
show();
show2("Billy");
// Parámetros opcionales
var optionals = function (name, surname, age) {
    if (age) {
        console.log("Its names is " + name + " " + surname + " it's " + age + " years");
    }
    console.log("Its names is " + name + " " + surname);
};
optionals("Billy", "Buttler");
var mostrar = function (name, surname, age) {
    if (age === void 0) { age = 25; }
    return "It's " + name + " " + surname + " and it's " + age + " years old";
};
console.log(mostrar("Annie", "Heatway"));
// Parámetros REST
var cartapostres = function (postre) {
    var frutas = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        frutas[_i - 1] = arguments[_i];
    }
    console.log("El postre es " + postre + " con frutas " + frutas);
};
cartapostres("Helado", "Fresa", "mango", "naranja");
var a = [5, 10, 15, 3, 79, 16, 6, 1];
