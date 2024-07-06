let numeroSecreto = 0;
let intentos = 0;

function asignarTexto(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*100) + 1;
}

function entradaNumeroUsuario() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroUsuario === numeroSecreto) {
        asignarTexto('p', `Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else if (numeroUsuario < numeroSecreto) {
        asignarTexto('p', 'El número secreto es mayor');
    } else {
        asignarTexto('p', 'El número secreto es menor');
    }
    intentos++;
    limpiar();
    return;
}

function condicionesIniciales() {
    asignarTexto('h1','Este es el juego del número secreto');
    asignarTexto('p', 'Escriba un número entre 1 y 100');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar caja
    limpiar();
    //Generar un número aleatorio
    //Solicitar el ingreso de un número
    //Inicializar el número de intentos
    condicionesIniciales();
    //Deshabilita el botón de Nuevo Juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

function limpiar() {
    document.querySelector('#valorUsuario').value = '';
}

condicionesIniciales();