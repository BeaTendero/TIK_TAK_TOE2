import random from "./random.js";

var player1; //True o False
var nuevoJuego = false; // Primer Juego

const sortearPartida = document.querySelector("#ranGame")
const comenzar = document.querySelector('#start');

sortearPartida.onclick = () => {
player1 = random(nuevoJuego);

}

comenzar.onclick = () => {
    ocultarModal();
}