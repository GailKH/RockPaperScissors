/*
Rock, Paper, Scissors 09/13/23

Input: Rock, Paper, or Scissors
Processing: randomNumber; 
Algorithm: 
    - user enters rock, paper, or scissors
    - rock, paper, or scissors is assigned a value (rock = 0, paper = 1, scissors = 2)
    - randomNumber is assigned a value
    - the two values are compared

Output: win, lose, or draw


Todo: 
    1.) Page needs to be refreshed to get another value, add loop option? 
    2.) Output should be shown somewhere other than console

*/




let randomNumber = Math.floor(Math.random()*3); 
document.getElementById("rock").addEventListener("click", rock);
document.getElementById("paper").addEventListener("click", paper);
document.getElementById("scissors").addEventListener("click", scissors);
 


function rock() {
    if (randomNumber == 0) (
        console.log("Rock! It's a draw!")
    )
    else if (randomNumber == 1) (
        console.log("Paper! You Lose!")
    )
    else (
        console.log("Scissors! You win!")
    ) 
}

function paper() {
    if (randomNumber == 0) (
        console.log("Rock! You win!")
    )
    else if (randomNumber == 1) (
        console.log("Paper! It's a draw!")
    )
    else (
        console.log("Scissors! You lose!")
    )
}

function scissors() {
    if (randomNumber == 0) (
        console.log("Rock! You lose!")
    )
    else if (randomNumber == 1) (
        console.log("Paper! You win!")
    )
    else (
        console.log("Scissors! It's a draw!")
    )

}

