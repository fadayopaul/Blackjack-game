let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";

let messageEl = document.getElementById("message-el");

function startgame() {
  if (sum <= 20) {
    message = "Do you want to draw another card? 😄";
  } else if (sum === 21) {
    message = "Wohoo! You've got Blackjack! 🤯";
    hasBlackjack = true;
  } else {
    message = "Sorry, you're out of the game! 😞";
    isAlive = false;
  }

  messageEl.textContent = message;
}
