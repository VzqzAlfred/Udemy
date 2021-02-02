const suma = () => {
    alert("usted ha seleccionado una suma :D"); 
    
    let a = parseInt(prompt("Inserte un número: "));
    let b = parseInt(prompt("Inserte otro número: "));
    let c=a+b;
    
    if((a>0  && b>0) || (a<=0 || b<=0)){
        alert(`El resultado de la suma de ambos números es ${c}.`);   
    }else{
        alert(`los números que ingreso son érroneos`);
    }
};


const resta = () => {
    alert("Usted ha seleccionado una restar :D"); 
    
    let a = parseInt(prompt("Inserte un número: "));
    let b = parseInt(prompt("Inserte otro número: "));
        
    if(a>=0 && b>=0){
        let c=a-b;
        alert(`El resultado de la resta de ambos números es ${c}.`);   
    }else if(a<=0 || b<=0){
        let c=a-b;
        alert(`El resultado de la resta es: ${c}`);
    }else{
        alert(`los números que ingreso son érroneos`);
    }
};


const mult = () => {
    alert("Usted ha seleccionado una multiplicación :D"); 
    
    let a = parseInt(prompt("Inserte un número: "));
    let b = parseInt(prompt("Inserte otro número: "));
    let c=a*b;

    if(a>0 && b>0){
        alert(`El resultado de la multiplicación es: ${c}.`);   
    }else if(a<=0 || b<=0){
        alert("El resultado de la multiplicación es: 0")
    }
};


const div = () => {
        alert("Usted ha seleccionado una división :D"); 
    
    let a = parseInt(prompt("Inserte el númerador de la división: "));
    let b = parseInt(prompt("Inserte el denominador de la división: "));
    let c=a/b;

    if(b==0){
        alert("No se puede dividir entre cero");
    }else{
        alert("El resultado de la división es: "+c);
    }
}