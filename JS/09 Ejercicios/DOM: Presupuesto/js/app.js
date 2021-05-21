const ingresos = [
    new Ingreso('Salario', 2100.00),
    new Ingreso('Venta coche', 1500)
];

const egresos = [
    new Egreso('Renta', 900),
    new Egreso('Ropa', 400)
];


const cargarApp = () => {
    cargarCabecero();
}

const totalIngresos = () => {
    let totalIngreso = 0;
    for (let ingreso of ingresos) {
        totalIngreso += ingreso.getValor;
    }
    return totalIngreso;
}

const totalEgresos = () => {
    let totalEgreso = 0;
    for (let egreso of egresos) {
        totalEgreso += egreso.getValor;
    }
    return totalEgreso;
}

const cargarCabecero = () => {
    let presupuesto = totalIngresos() - totalEgresos(),
        porcentajeEgreso = totalEgresos()/totalIngresos();
    document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
    document.getElementById("porcentaje").innerHTML = formatoPorcentaje(porcentajeEgreso);
    document.getElementById("ingresos").innerHTML = formatoMoneda(totalIngresos());
    document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
}


const formatoMoneda = (valor) => {
    return valor.toLocaleString('en-US', {style: 'currency', currency: 'USD', minimumFractionDigits: 2});
}

const formatoPorcentaje = (valor) => {
    return valor.toLocaleString('en-US', {style: 'percent', minimumFractionDigits: 1})
}