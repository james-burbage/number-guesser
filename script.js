var clearButton = document.querySelector(".clear-button");
var userGuessDisplay = document.querySelector(".user-guess-display");
var explainText = document.querySelector(".explain-text");
var guessButton = document.querySelector(".guess-button");
var guessInput = document.querySelector(".guess-input");
var maxRangeNum = document.querySelector(".range-max-box").value || 100;
var minRangeNum = document.querySelector(".range-min-box").value || 1;
var userGuessGuidance = document.querySelector(".user-guess-guidance");
var randNum = Math.floor(Math.random() * 100 + 1);
var rangeSubmit = document.querySelector(".range-submit");
var resetButton = document.querySelector(".reset-button");

guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keyup", buttonsEnable);
rangeSubmit.addEventListener("click", getRandomNumber);
resetButton.addEventListener("click", resetGame);

function buttonsEnable() {
  guessButton.disabled = false;
  resetButton.disabled = false;
  rangeSubmit.disabled = false;
  clearInput();
}

function checkGuess(event) {
  event.preventDefault();
  getRandomNumber();
  var parsedNum = parseInt(guessInput.value);
  var parsedMax = parseInt(maxRangeNum);
  var parsedMin = parseInt(minRangeNum);
  userGuessDisplay.innerText = guessInput.value;
  explainText.innerText = "Your last guess was:";
  if (parsedNum > parsedMax || parsedNum < parsedMin) {
    userGuessGuidance.innerText =
      "Invalid number! Please pick a number between 1 - 100!";
  } else if (parsedNum === randNum) {
    userGuessGuidance.innerText = "BOOM!!!";
  } else if (parsedNum < randNum) {
    userGuessGuidance.innerText = "That is too low!";
  } else if (parsedNum > randNum) {
    userGuessGuidance.innerText = "That is too high!";
  }
}

function resetGame() {
  location.reload();
}

function getRandomNumber() {
  var parsedMax = parseInt(maxRangeNum);
  var parsedMin = parseInt(minRangeNum);
  return Math.floor(Math.random() * parsedMax + 1 - parsedMin) + parsedMin;
}

function clearInput() {
  if (guessInput.value.length < 1) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
}
