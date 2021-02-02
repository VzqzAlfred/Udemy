       /***********************  MATRICES  *************************/
 const manejoMatriz = () => {
     let iterador = null;
     var a1 = new Array();
     var a2 = new Array();
     var a3 = new Array();
     //renglón 1
     a1[0] = 'a';
     a1[1] = 'b';
     a1[2] = 'c';
     
     //renglón 2
     a2[0] = 'd';
     a2[1] = 'e';
     a2[2] = 'f';
     
    //renglón 3
     a3[0] = 'g';
     a3[1] = 'h';
     a3[2] = 'i';
     
     var a = new Array();
     a[0] = a1;
     a[1] = a2;
     a[2] = a3;
     
     //recorriendo nuestra matriz
     
     for (i=0; i<a.length; i++){
         
         //recorriendo cada arreglo individual o interno
         for(j=0; j<a[i].length; j++){
             iterador = a[i][j];
             impresionMatriz(iterador); 
         }
         impresionMatriz("<br>");
     }
     
 };
 
const impresionMatriz = (valorIterador) => {
    document.getElementById("resultMatriz").innerHTML += valorIterador + " ";
};
 
 const borrarMatriz = () => document.getElementById("resultMatriz").innerHTML = ""; 




       /***********************  FUNCIONES: Factorial  *************************/
       
const numberfactorial = (entrada) => {
    let dato = entrada.value;
    if (dato >= 0 && dato <= 100){
        let res = factorial(dato);
        limpiar();
        imprimir(res);
        
    }else {
        limpiar();
        imprimir("El valor tiene que ser entre 0 y 100");
    }
};

const factorial = (n) => {
    if(n == 0 || n == 1){
        return 1;
    }else {
        return n * factorial(n-1);
    }
};

const imprimir = (valor) => {
  let res = document.getElementById("resultFactorial").innerHTML = `El resultado es: `+ valor;
};

const limpiar = () => {
  let res = document.getElementById("resultFactorial").innerHTML = " ";  
};





       /***********************  FUNCIONES: Serie de Finonacci  *************************/
const numberFibonacci = (numeroEntrada) => {
    limpiarFibonacci();
    let a = 0;
    let b = 1;
    let c;
    let elementosSerie = numeroEntrada.value;
    if(elementosSerie > 100){
        mostrarFibonacci("No se puede imprimir más de 100 elementos :C")
    } 
    mostrarFibonacci(a);
    mostrarFibonacci(b);
    
    //realizando la iteración
    for(i=0; i < elementosSerie - 2; i++){
        c= a + b;
        a = b;
        b = c; 
        mostrarFibonacci(c);
    }
    
};

const mostrarFibonacci = (valorFibonacci) => {
  document.getElementById("resultFibonacci").innerHTML += valorFibonacci + ", ";
};

const limpiarFibonacci = () => {
  document.getElementById("resultFibonacci").innerHTML = " ";  
};