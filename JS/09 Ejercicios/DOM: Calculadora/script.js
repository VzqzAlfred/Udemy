const d = document,
    $operandoA = d.getElementById("operandoA"),
    $operandoB = d.getElementById("operandoB"),
    $add = d.getElementById("add");

const sumar = () => {
    const form = d.getElementById("forma");
    let operandoA = form["operandoA"],
        operandoB = form["operandoB"],
        resultado = parseInt(operandoA.value) + parseInt(operandoB.value);
    
    if(isNaN(resultado)){ 
        resultado = "Los números ingresados no son de tipo numerico.";
    }

    d.getElementById("resultado").innerText = `Resultado: ${resultado}`;
    
}