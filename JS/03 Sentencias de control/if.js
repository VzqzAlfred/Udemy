let condition = true;

if (condition) {
  console.log("True :D");
} else {
  console.log("False :(");
}

let num = "2";

(num == undefined || !num || isNaN(num) || typeof(num) !== "number")
  ? console.log("Por favor ingresa un número")
  : num == 1
    ? console.log("Número uno")
    : num == 2
        ? console.log("Número dos")
        : num == 3
            ? console.log("Número tres")
            : num == 4
                ? console.log("Número cuatro")
                : console.log("Número desconocido");
