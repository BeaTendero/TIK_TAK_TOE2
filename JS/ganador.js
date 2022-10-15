function winPlayer1 (score1){
    const img_player1 =document.getElementById("img_player1");
    img_player1.src = "./images/player 1 gana.png";
    img_player1.style.width = '80%';

    const img_player2 =document.getElementById("img_player2");
    img_player1.src = "./images/jugador 2 pierde.jpg";
    img_player1.style.width = '80%';

    document.getElementById("player1_title").style.fontSize ='18px';
    document.getElementById("player2_title").style.fontSize ='18px';
    const score_1 =document.getElementById('score_1');
    const score_1m = document.getElementById('score_1m');
    score_1.innerText = score1;
    score_1m.innerText = score1;


    const nextButton = document.getElementById("nextButton");
    nextButton.disabled = false;
    nextButton.style.backgroundColor = "#f5ce22"
    
}