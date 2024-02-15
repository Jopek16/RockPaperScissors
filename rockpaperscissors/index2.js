const choices = ["rock","paper","scissors"];
const player = document.getElementById("player");
const computer = document.getElementById("comp");
const results = document.getElementById("tie");
const Playercount = document.getElementById("Player");
const Computercount = document.getElementById("Computer");
const playerscored = document.getElementById("playerscored");
const computerscored = document.getElementById("computerscored");
let playerscore = 0;
let computerscore = 0;

function game(playerchoice){
 const computerchoice =choices[Math.floor(Math.random()*3)];
 let result = "";

 if(playerchoice === computerchoice){
    result = "It's tie";
 }
 else{
    switch(playerchoice){
    case "rock":
        result =(computerchoice === "scissors") ? "You win" : "You lost";
        break;
    case "paper":
        result =(computerchoice === "rock") ? "You win" : "You lost";
        break;
    case "scissors":
        result =(computerchoice === "paper") ? "You win" : "You lost";
        break;
    }}


player.textContent = `Player:${playerchoice}`;
computer.textContent = `computer:${computerchoice}`;
results.textContent = result;

switch(result){
    case "You win":
    playerscore++;
    playerscored.textContent = playerscore;
    break;
    case "You lost":
    computerscore ++;
    computerscored.textContent = computerscore;
    break;
}

}





