const botonJugador1 = document.getElementById("botonJugador1");
const botonJugador2 = document.getElementById("botonJugador2");
const inputJugador1 = document.getElementById("inputJugador1");
const inputJugador2 = document.getElementById("inputJugador2");


const insertarJugador1 = () =>{
    let jugador1 = inputJugador1.value
    window.sessionStorage.setItem("jugador1",jugador1)
}
const insertarJugador2 = () =>{
    let jugador2 = inputJugador2.value
    window.sessionStorage.setItem("jugador2",jugador2)
}

