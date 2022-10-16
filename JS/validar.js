var ganador = 0;
var cantidadJuegos = 0; /// Control para reiniciar la variable ganador ///

function validar (player1, matrix , contador_selecciones){
 let simbolo;

 // para reiniciar la variable //
 if (cantidadJuegos ===1){
    ganador = 0;
    cantidadJuegos=0;
 }

if(player1){
    simbolo = 'X';
}

else{
    simbolo = 'O';
}

///primera fila //

if (simbolo === matrix[0][0] && simbolo === matrix [0] [1] && simbolo === matrix [0][2]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

///segunda fila //
if (simbolo === matrix[1][0] && simbolo === matrix [1] [1] && simbolo === matrix [1][2]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

/// tercera fila ///

if (simbolo === matrix[2][0] && simbolo === matrix [2] [1] && simbolo === matrix [2][2]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

/////primera columna

if (simbolo === matrix[0][0] && simbolo === matrix [1][0] && simbolo === matrix [2][0]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

//// segunda columna //

if (simbolo === matrix[0][1] && simbolo === matrix [1] [1] && simbolo === matrix [2][1]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

/// tercera columna ///

if (simbolo === matrix[0][2] && simbolo === matrix [1][2] && simbolo === matrix [2][2]){
    if (simbolo === 'X'){
        ganador = 1;
        cantidadJuegos +=1;
    }
    else if (simbolo === 'O'){
        ganador = 2;
        cantidadJuegos +=1;
    }
    else{
        ganador = 0;
    }
}

}