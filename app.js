//TODO:

let firstCard = 11;
let secondCard = 10;
let sum = firstCard + secondCard;
let hasBlackjack = false;

if (sum < 21) {
  console.log("Do you want to draw another card? 😄");
} else if (sum === 21) {
  console.log("Wohoo! You've got Blackjack! 🤯");
  hasBlackjack = true;
} else {
  console.log("Sorry, you're out of the game! 😞");
}

//cash out
console.log(hasBlackjack);

