var ganador = 0;
var cantidadJuegos = 0; /// Control para reiniciar la variable ganador ///

function validar(player1, matrix, contador_selecciones) {
    let simbolo;

    // para reiniciar la variable //
    if (cantidadJuegos === 1) {
        ganador = 0;
        cantidadJuegos = 0;
    }

    if (player1) {
        simbolo = 'X';
    }

    else {
        simbolo = 'O';
    }

    ///primera fila //

    if (simbolo === matrix[0][0] && simbolo === matrix[0][1] && simbolo === matrix[0][2]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    ///segunda fila //
    else if (simbolo === matrix[1][0] && simbolo === matrix[1][1] && simbolo === matrix[1][2]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    /// tercera fila ///

    else if (simbolo === matrix[2][0] && simbolo === matrix[2][1] && simbolo === matrix[2][2]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    /////primera columna

    else if (simbolo === matrix[0][0] && simbolo === matrix[1][0] && simbolo === matrix[2][0]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    //// segunda columna //

    else if (simbolo === matrix[0][1] && simbolo === matrix[1][1] && simbolo === matrix[2][1]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    /// tercera columna ///

    else if (simbolo === matrix[0][2] && simbolo === matrix[1][2] && simbolo === matrix[2][2]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    ///diagonal 1//
    else if (simbolo === matrix[0][0] && simbolo === matrix[1][1] && simbolo === matrix[2][2]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }

    //// diagonal 2 //

    else if (simbolo === matrix[0][2] && simbolo === matrix[1][1] && simbolo === matrix[2][0]) {
        if (simbolo === 'X') {
            ganador = 1;
            cantidadJuegos += 1;
        }
        else if (simbolo === 'O') {
            ganador = 2;
            cantidadJuegos += 1;
        }
        else {
            ganador = 0;
        }
    }
if (contador_selecciones === 9){
    const nextButton = document.getElementById ("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22";
    nextButton.style.cursor = "pointer";
    ganador = 3;  /// EMPATE ///

}
return ganador;

}

export default validar;