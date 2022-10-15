import random from "./random.js";
import ocultarModal from "./ocultarModal.js";

var player1; //True o False
var nuevoJuego = false; // Primer Juego
var contador_selecciones = 0;
var ganador; //devolverá 4 estados (1ganaJ1,2ganaJ2,3empatereiniciapartida,4nohayganador)
var score1 = 0;
var score2 = 0;

const sortearPartida = document.querySelector("#ranGame")
const comenzar = document.querySelector('#start');

const activeBoton00 = document.querySelector("#button_active1");
const activeBoton01 = document.querySelector("#button_active2");
const activeBoton02 = document.querySelector("#button_active3");
const activeBoton10 = document.querySelector("#button_active4");
const activeBoton11 = document.querySelector("#button_active5");
const activeBoton12 = document.querySelector("#button_active6");
const activeBoton20 = document.querySelector("#button_active7");
const activeBoton21 = document.querySelector("#button_active8");
const activeBoton22 = document.querySelector("#button_active9");

function contadorClicks(){
contador_selecciones+=1; 
if (contador_selecciones===9){  //////// limiteclicks///
    contador_selecciones =0;
}
}

function puntaje(){
    if(ganador===1){
        score1 +=1;
        winPlayer1(score1);
        contador_selecciones = 0;
    }
    else if(ganador===2){
        score2 +=1;
        winPlayer2(score2);
        contador_selecciones = 0;
    }

    else if(ganador ===3){
        contador_selecciones = 0;
    }
}

sortearPartida.onclick = () => {
player1 = random(nuevoJuego);

}

comenzar.onclick = () => {
    ocultarModal();
}

window.addEventListener("click",
function (e){
    let modal = document.querySelectorAll(".modal")[0];
    let modal_container = document.querySelectorAll(".modal-container")[0];

    if(e.target === modal_container){
        modal.classList.toggle("modal-close");
        setTimeout(
            function (){
                modal_container.style.opacity = "0";
                modal_container.style.visibility = "hidden";
            },
        1000)
    }
}
);

 activeBoton00.onclick = () => {
var resultado = boton00(player, matrix, contador_selecciones);  //MATRIX lleva el almacenaje de todo el contador llegará hasta 9//
contadorClicks();
puntaje();
}