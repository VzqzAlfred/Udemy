const d = document;


const mostrarReloj = () => {
    let time = new Date();

    let hour = formatoHora(time.getHours());
    let min = formatoHora(time.getMinutes());
    let sec = formatoHora(time.getSeconds());
    d.getElementById("hora").innerHTML = `${hour}:${min}:${sec}`;


    let fecha = new Date().toLocaleDateString();
    d.getElementById("fecha").innerHTML = `${fecha}`;
}

const formatoHora = (hora) => {
    if(hora < 10){
        hora = '0' + hora;
    }
    return hora
}

setInterval(() => {
    mostrarReloj();
}, 1000);