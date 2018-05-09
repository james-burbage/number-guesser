// Variables
var clearButton = document.querySelector('.clear-button');
var displayGuess = document.querySelector('.last-guess');
var explainText = document.querySelector('.explain-text');
var guessButton = document.querySelector('.guess-button');
var inputBox = document.querySelector('.input-box');
var outputText = document.querySelector('.output-text');
var randNum = Math.floor(Math.random() * 100 +1);
var resetButton = document.querySelector('.reset-button');

// Event Listeners
guessButton.addEventListener('click', checkGuess);
inputBox.addEventListener('keyup', buttonsEnable);
resetButton.addEventListener('click', resetGame);

// Functions
function buttonsEnable() {
  // clearButton.disabled = false;
  guessButton.disabled = false;
  resetButton.disabled = false;
  console.log("buttons work!");
}

function checkGuess(event) {
  event.preventDefault();
  var parsedNum = parseInt(inputBox.value);
  displayGuess.innerText = inputBox.value;
  explainText.innerText = 'Your last guess was:';
    if (parsedNum === randNum) {
  outputText.innerText = "BOOM!!!";
} else if (parsedNum < randNum) {
  outputText.innerText = "That is too low!";
} else if (parsedNum > randNum) {
  outputText.innerText = "That is too high!";
} else if (parsedNum > 100) {
  outputText.innerText = "Invalid number. Please pick a number between 1-100";
} else if (parsedNum < 1) {
  outputText.innerText = "Invalid number. Please pick a number between 1-100";
}
  console.log(randNum);
  console.log('guess checked!')
}

function resetGame() {
  // inputBox.value = '';
  // displayGuess.innerText = inputBox.value;
  // outputText.innerText = inputBox.value;
  location.reload();
  console.log('input reset!');
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100 +1);
}