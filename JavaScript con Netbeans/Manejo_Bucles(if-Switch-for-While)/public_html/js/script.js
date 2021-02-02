                /***********************  Ciclo if  *************************/
   
const functionAge = (edad) => {
    let resultAge = null;
    let age = edad.value;

    if (age > 0 && age < 12) {
        resultAge = `Su edad de ${age} años es para ver clasificación A/AA`;
    } 
    else if (age >= 12 && age < 18) {
        resultAge = `Su edad de ${age} años es para ver clasificación C y D`;
    } else if (age >= 18){
        resultAge = `Su edad de ${age} años es para ver todas las clasificaciones.`;
    }else {
        resultAge = "Su edad es aeeronea, try again."
    }
    
    document.getElementById("resultAge").innerHTML = resultAge;
};





 /***********************  Ciclo switch  *************************/
 //Determinar el día de la fecha seleccionada.
 
const determinarDia = ( entrada ) => {
    let fechaTexto = null;
    //Convirtiendo la entrada a un objetivo de tipo Fecha
    let fecha = new Date( entrada.value );
    // Una vez convirtiendo la variable fecha a una fecha, le aplicamos el método getDay()
    let dia = fecha.getDay();
    
    switch(dia){
        case 0:
            fechaTexto = `El día es lunes`;
            break;
        case 1:
            fechaTexto = "El día es Martes";
            break;
        case 2: 
            fechaTexto = "El día es Miércoles";
            break;
        case 3:
            fechaTexto = "El día es Jueves";
            break;
        case 4:
            fechaTexto = "El día es Viernes";
            break;
        case 5:
            fechaTexto = "El día es Sábado";
            break;
        case 6:
            fechaTexto = "El día es Domingo";
            break;
        default:
            fechaTexto = "Valor erroneo de fecha";
    }
    
    document.getElementById("resultFecha").innerHTML = fechaTexto;
};



   
    /***********************  Ciclo for  *************************/
 //Determinar los primeros 10 números.
 
 const randomNumbers = () => {
     for (let i = 1; i<=10; i++){
         document.getElementById("resultFor").innerHTML += i + " ";
     }
 };
 
 const deleteNumbers = () => {
   document.getElementById("resultFor").innerHTML = "";
 };
 
 
 
 
 
     /***********************  Ciclo while  *************************/
 //Determinar los primeros números pares del 1 al 10
 
 const showNumbers = () => {
     
     let i = 0;
     while (i <= 10){
         if(i % 2 == 0){
             document.getElementById("resultWhile").innerHTML += i + " ";
         }
         i++;
     }

 };
 
 const borrarNumbers = () => {
   document.getElementById("resultWhile").innerHTML = "";
 };
 
 
 
 
 
      /***********************  Arreglos  *************************/
 const showArray = () => {
     //Definiendo el arreglo
    let lengua = null;
    let lenguas = new Array();
    lenguas[0] = "Chino mandarin";
    lenguas[1] = "Alemán";
    lenguas[2] = "Ruso";
    lenguas[3] = "Inglés";
    lenguas[4] = "Español";
    
    //Recorriendo el arreglo
    for(i=0; i < lenguas.length; i++){
        lengua = lenguas[i]; 
        //Imprimiendo cada elemento del arreglo
        document.getElementById("resultArray").innerHTML += lengua + " ";
    }
 };
 
// const imprimir = (valor) => {
//     document.getElementById("resultArray").innerHTML += valor + " ";
// };

 
 const borrarArray = () => document.getElementById("resultArray").innerHTML = "";
  
       