
let myFuncion = function (){
    console.log("Saludos desde miFuncion");
}
myFuncion()


const miFunctionArrow = () => {
    console.log("Mi función Flecha.");
}
miFunctionArrow();


/******************************/
const greetings = (name="undefined") =>  `Hola ${name}`;

console.log(greetings("Miguel"));