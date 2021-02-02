//Variables globales
var peliculas = new Array();
var contadorPeliculas = 0;

function agregarPelicula(entrada) {
    var pelicula = entrada.value;
    peliculas[contadorPeliculas++] = pelicula;
    //Desplegamos el catálogo actual de peliculas
    mostrarCatalogo();
    //Limpiamos la caja de texto y la seleccionamos
    entrada.value = "";
    entrada.focus();
}

function mostrarCatalogo() {
    limpiar("catalogo");
    var pelicula = null;
    for (i = 0; i < peliculas.length; i++) {
        pelicula = peliculas[i];
        var resultado = i + " - " + pelicula;
        imprimir(resultado, "catalogo");
    }
}

function buscarPelicula(entrada) {
    limpiar("busqueda");
    var textoBusqueda = entrada.value;
    //Buscamos dentro del arreglo si existe algo similar
    var indice = peliculas.indexOf(textoBusqueda);
    if (indice == -1) {
        imprimir("No se encontró ningún resultado", "busqueda");
    }
    else {
        imprimir("La película tiene la posición: " + indice, "busqueda");
    }
    entrada.value = "";
    entrada.focus();
}

function imprimir(valor, campo) {
    var resultado = document.getElementById(campo);
    resultado.innerHTML += valor + " <br/>";
}

function limpiar(campo) {
    document.getElementById(campo).innerHTML = "";
}