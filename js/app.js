player = {
  name: "PaulF",
  chips: 145,
};
let cards = [];
let sum = 0;
let hasBlackjack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

let playerEL = document.getElementById("player-el");
playerEL.textContent = player.name + ": $" + player.chips;

function getRandomCard() {
  let randonNumber = Math.floor(Math.random() * 13) + 1;

  if (randonNumber > 10) {
    return 11;
  } else if (randonNumber === 1) {
    return 11;
  } else {
    return randonNumber;
  }
}

function startgame() {
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  isAlive = true;

  rendergame();
}

function rendergame() {
  cardsEL.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardsEL.textContent += cards[i] + ", ";
  }

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

function newcard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    rendergame();
  }
}
