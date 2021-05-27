let exam:string;
exam = "Billy";
console.log(exam);


let si:boolean = true,
    no:boolean = false;
console.log(si, no);


let n:number = 55;
n=45;
console.log(n);

let cadena:string = "Cadena";
let surname:string = `Buttler`;
console.log(cadena, surname);


// Arreglos
let numeros:number[] = [15,25,20,30]
console.log(numeros);

let nombres:string[] = ['Gabs', 'Lili'];
console.log(nombres);

let coleccion:Array<number> = [60,45,15];
console.log(coleccion);


let countries:Array<string> = ['Prague', 'Moscow', 'Nairobi'];
console.log(countries);



// Tuplas
let tupla: [number, string, boolean];
tupla = [12, 'Marie', false];

tupla.forEach(element => {
    console.log(element);
});