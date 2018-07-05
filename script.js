var clearButton = document.querySelector(".clear-button");
var displayGuess = document.querySelector(".last-guess");
var explainText = document.querySelector(".explain-text");
var guessButton = document.querySelector(".guess-button");
var guessInput = document.querySelector(".guess-input");
var outputText = document.querySelector(".output-text");
var randNum = Math.floor(Math.random() * 100 + 1);
var resetButton = document.querySelector(".reset-button");
var maxRangeNum = document.querySelector(".range-max-box").value || 100;
var minRangeNum = document.querySelector(".range-min-box").value || 1;
var rangeSubmit = document.querySelector(".range-submit");

guessButton.addEventListener("click", checkGuess);
guessInput.addEventListener("keyup", buttonsEnable);
resetButton.addEventListener("click", resetGame);
rangeSubmit.addEventListener("click", getRandomNumber);

function buttonsEnable() {
  // clearButton.disabled = false;
  guessButton.disabled = false;
  resetButton.disabled = false;
  console.log("buttons work!");
  clearInput();
}

function checkGuess(event) {
  event.preventDefault();
  getRandomNumber();
  var parsedNum = parseInt(guessInput.value);
  var parsedMax = parseInt(maxRangeNum);
  var parsedMin = parseInt(minRangeNum);
  displayGuess.innerText = guessInput.value;
  explainText.innerText = "Your last guess was:";
  if (parsedNum > parsedMax || parsedNum < parsedMin) {
    outputText.innerText =
      "Invalid number! Please pick a number between 1 - 100!";
  } else if (parsedNum === randNum) {
    outputText.innerText = "BOOM!!!";
  } else if (parsedNum < randNum) {
    outputText.innerText = "That is too low!";
  } else if (parsedNum > randNum) {
    outputText.innerText = "That is too high!";
  }
  console.log(randNum);
  console.log("guess checked!");
}

function resetGame() {
  location.reload();
  console.log("input reset!");
}

function getRandomNumber() {
  var parsedMax = parseInt(maxRangeNum);
  var parsedMin = parseInt(minRangeNum);
  return Math.floor(Math.random() * parsedMax + 1 - parsedMin) + parsedMin;
  console.log("number generated!");
}

function clearInput() {
  if (guessInput.value.length < 1) {
    clearButton.disabled = true;
  } else {
    clearButton.disabled = false;
  }
}
