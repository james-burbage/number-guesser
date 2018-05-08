// Variables
var inputBox = document.querySelector('.input-box');
var guessButton = document.querySelector('.guess-button');
var clearButton = document.querySelector('.clear-button');
var resetButton = document.querySelector('.reset-button');
var randNum = Math.floor(Math.random() * 100 +1);
var buttonStyle = document.querySelectorAll('.button-style');
var outputText = document.querySelector('.output-text')


//Event Listeners
inputBox.addEventListener('keyup', buttonsEnable);
guessButton.addEventListener('click', checkGuess);
clearButton.addEventListener('click', clearInput);
resetButton.addEventListener('click', resetGame);

// STEPS 
// Add Event listener, add the function called.
// Move on to next Event listener.

//Functions
function buttonsEnable() {
  guessButton.disabled = false;
  clearButton.disabled = false;
  resetButton.disabled = false;
  console.log("buttons work!");
}

function checkGuess(event) {
  event.preventDefault();
  var parsedNum = parseInt(inputBox.value);
    if (parsedNum === randNum) {
  outputText.innerText = "BOOM!";
} else if (parsedNum < randNum) {
  outputText.innerText = "That is too low";
} else if (parsedNum > randNum) {
  outputText.innerText = "That is too high";
} else if (parsedNum > 100) {
  outputText.innerText = "Invalid number. Please pick a number between 1-100";
} else if (parsedNum < 1) {
  outputText.innerText = "Invalid number. Please pick a number between 1-100";
};
  console.log('guess checked!');
  console.log(randNum);
}

function clearInput() {
  console.log('input cleared!');
}

function resetGame() {
  console.log('game reset!');
}

// var max = 100;
// var min = 1;

//   if (userGuess === randNum) {
//   outputText.innertext = "BOOM!";
// } else if ('userGuess' < randNum) {
//   outputText.innertext = "That is too low";
// } else if ('userGuess' > randNum) {
//   outputText.innertext = "That is too high";
// } else if ('userGuess' > 100) {
//   outputText.innertext = "Invalid number. Please pick a number between 1-100";
// } else if ('userGuess' < 1) {
//   outputText.innertext = "Invalid number. Please pick a number between 1-100";
// });
