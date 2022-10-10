
function random (nuevoJuego){
    var player1;
    const ranMatch = Math.floor(Math.random()*2) +1; //1 o 2
    const playerInit = document.getElementById ("playerInit");

    if(ranMatch === 1 ){
        playerInit,innerText = "Inicia el Jugador 1"
        player1 = true;
    }
    else{
        playerInit.innerText = "Inicia el Jugador 2"
        player1 = false;
    }

    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];
    modal_container.style.opacity = "1";
    modal_container.style.visibility = "visible";
    modal.classList.toggle("modal-close");
    iniciarJuego(nuevoJuego , player1);

    
}