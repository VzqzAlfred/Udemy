const ingresos = [
  new Ingreso("Sueldo", 5000.00),
  new Ingreso("Venta coche", 1500)
];

const egresos = [
    new Egreso("Renta", 900), 
    new Egreso("Ropa", 400)
];

const cargarApp = () => {
  cargarCabecero();
  cargarIngresos();
  cargarEgresos();
};

const totalIngresos = () => {
  let totalIngreso = 0;
  for (let ingreso of ingresos) {
    totalIngreso += ingreso.getValor;
  }
  return totalIngreso;
};

const totalEgresos = () => {
  let totalEgreso = 0;
  for (let egreso of egresos) {
    totalEgreso += egreso.getValor;
  }
  return totalEgreso;
};

const cargarCabecero = () => {
  let presupuesto = totalIngresos() - totalEgresos(),
    porcentajeEgreso = totalEgresos() / totalIngresos();
  document.getElementById("presupuesto").innerHTML = formatoMoneda(presupuesto);
  document.getElementById("porcentaje").innerHTML =
    formatoPorcentaje(porcentajeEgreso);
  document.getElementById("ingresos").innerHTML = formatoMoneda(
    totalIngresos()
  );
  document.getElementById("egresos").innerHTML = formatoMoneda(totalEgresos());
};

const formatoMoneda = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  });
};

const formatoPorcentaje = (valor) => {
  return valor.toLocaleString("en-US", {
    style: "percent",
    minimumFractionDigits: 1,
  });
};



const cargarIngresos = () => {
  let ingresosHTML = "";
  for (let ingreso of ingresos) {
    ingresosHTML += crearIngresoHTML(ingreso);
  }
  document.getElementById("lista-ingresos").innerHTML = ingresosHTML;
};

const crearIngresoHTML = (ingreso) => {
  let ingresosHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${ingreso.getDescripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">+ ${formatoMoneda(ingreso.getValor)}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn"><ion-icon name="trash"></ion-icon></button>
        </div>
    </div>
</div>
    `;

    return ingresosHTML;
};



const cargarEgresos = () => {
    let egresosHTML = "";
    for (let egreso of egresos) {
      egresosHTML += crearEgresoHTML(egreso);
    }
    document.getElementById("lista-egresos").innerHTML = egresosHTML;
  };
  
  const crearEgresoHTML = (egreso) => {
    let egresosHTML = `
    <div class="elemento limpiarEstilos">
    <div class="elemento_descripcion">${egreso.getDescripcion}</div>
    <div class="derecha limpiarEstilos">
        <div class="elemento_valor">${formatoMoneda(egreso.getValor)}</div>
        <div class="elemento_porcentaje">${formatoPorcentaje(egreso.getValor/totalEgresos())}</div>
        <div class="elemento_eliminar">
            <button class="elemento_eliminar--btn"><ion-icon name="trash"></ion-icon></button>
        </div>
    </div>
</div>
      `;
  
      return egresosHTML;
  };