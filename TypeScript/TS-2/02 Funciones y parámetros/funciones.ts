function add(a:number, b:number):number{
    return a+b;
}
const sum:number = add(2,5);
console.log(sum);


function show():void{
    console.log("function one :(");
    
}

const show2 = (a:string):void => {
    console.log(`Hi ${a}`);   
}

show();
show2("Billy");




// Parámetros opcionales
const optionals = (name:string, surname:string, age?:number) => {

    if(age){
        console.log(`Its names is ${name} ${surname} it's ${age} years`);   
    }

    console.log(`Its names is ${name} ${surname}`);   
}
optionals("Billy", "Buttler");



const mostrar = (name:string, surname:string, age:number = 25) => {
    return `It's ${name} ${surname} and it's ${age} years old`;
}

console.log(mostrar("Annie", "Heatway"));


// Parámetros REST

const cartapostres = (postre:string, ...frutas:string[]):void => {
    console.log(`El postre es ${postre} con frutas ${frutas}`);
}

cartapostres("Helado", "Fresa", "mango", "naranja");

let a:number[] = [5,10,15,3,79,16,6,1];
