let firstCard = 10;
let secondCard = 4;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

function startgame() {
  cardsEL.textContent = "Cards: " + firstCard + " " + secondCard;
  sumEL.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "Sorry, you're out of the game!";
    isAlive = false;
  }

  messageEl.textContent = message;
}
