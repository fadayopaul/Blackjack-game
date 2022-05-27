let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard]; //array- ordered list ot items
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEL = document.querySelector("#sum-el");
let cardsEL = document.querySelector("#cards-el");

function getRandomCard() {
  return 5;
}

function startgame() {
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
  console.log("drawing a new card from the deck");
  let card = getRandomCard();
  sum += card;

  cards.push(card);
  console.log(cards);

  rendergame();
}
