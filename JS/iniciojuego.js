import turno from "./turno.js"
function iniciarJuego(nuevoJuego, player1) {
    var i;

    if (!nuevoJuego) {  ////  ! PARA MARCAR FALSE /// activación primer juego///
        for (i = 1; i < 10; i++) {
            let string = "button_active" + i;
            document.getElementById(string).style.display = 'block';
        }
    }

    else{  ///PARA ACTIVAR EN LAS SIGUIENTES PARTIDAS//
        for (i = 1; i < 10; i++) {
            let string = "button_active" + i;
            document.getElementById(string).disabled = false;
            document.getElementById(string).style.cursor = 'pointer';
        }

        nuevoJuego = false;
      
    }

turno (player1);


}

export default iniciarJuego;