var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

const listaZdjec = [
    './images/dice1.png',
    './images/dice2.png',
    './images/dice3.png',
    './images/dice4.png',
    './images/dice5.png',
    './images/dice6.png'
];

var dice1 = document.querySelector(".img1").src = listaZdjec[randomNumber1 - 1];
var dice2 = document.querySelector(".img2").src = listaZdjec[randomNumber2 - 1];

if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "Player 1 Wins!"
} else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins!"
} else {
    document.querySelector("h1").innerHTML = "Draw!"
}