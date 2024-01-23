let numeroSecreto = 0;
let numeroIntentos = 0;
let numeroMaximo = 100;

function asignarElementoTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById("valorUsuario").value);
    //realizar comparacion para recibir un resultado booleano
    if (numeroUsuario === numeroSecreto) {
        asignarElementoTexto('p', `Has acertado el numero con una cantidad de ${numeroIntentos} ${(numeroIntentos ===1) ? 'intento' : 'intentos'}`);
        //si el jugador acierta, activamos el boton "nuevo juego"
        document.getElementById('reiniciar').removeAttribute('disabled');
    }
    else {
        //el usuario no acerto
        if (numeroUsuario > numeroSecreto) {
            asignarElementoTexto('p', 'El numero secreto es menor');
        }
        else {
            asignarElementoTexto('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();

        if (numeroIntentos > 10) {
            asignarElementoTexto("p", "Perdiste :(");
            nuevoIntento();
        }
    }
    return;
}

function nuevoIntento() {
    document.getElementById("reiniciar").removeAttribute("disabled");
    document.getElementById("intento").setAttribute("disabled", true);
}

function condicionInicial() {
    asignarElementoTexto("h1", "Bienvenido al juego del numero secreto");
    asignarElementoTexto("p", "Escoge un numero del 1 al 100");
    numeroSecreto = asignarNumeroSecreto();
    numeroIntentos = 1;
}

function limpiarCaja() {
    //para colocar un valor vacio se colocan dos comillas
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = '';
}

function asignarNumeroSecreto() {
    return Math.floor(Math.random()*numeroMaximo)+1;  //return me permite retornar este valor (numero secreto)
}

function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    condicionInicial();
    //reiniciar las condiciones de juego
    condicionInicial();
    //deshabilitar el boton de nuevo intento
    document.querySelector("#reiniciar").setAttribute("disabled", true); // seteo el atributo disabled, con el valor "true".
    //
    document.getElementById("intento").removeAttribute("disabled");
}

condicionInicial();
