"use strict"; 
let randomNumber = Math.floor(Math.random() * 10) + 1;
console.log(randomNumber)
let userGuess = Number(prompt("Guess a number!:"));
let result = document.getElementById("result")
let isAlphabetic = /^[A-Za-z]+$/ 
let i = 1 
while(userGuess != randomNumber) {
    if (userGuess == 999) {
        break
    }
    if (isAlphabetic.test(userGuess) == true) {
        userGuess = Number(prompt("You can't guess letters!:")); 
        i += 1 
    }
    if (randomNumber < userGuess) {
        userGuess = Number(prompt("Too high! Guess again:"));
        i += 1 
        continue 
    }
    if (randomNumber > userGuess) {
        userGuess = Number(prompt("Too low! Guess again:"));
        i += 1 
        continue 
    }
}

result.textContent = `Congrats! You got it in ${i} attempts`
