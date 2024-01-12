 import questions from './questions.js';

// Get the start button
var startButton = document.getElementById('start');

// Add event listener to start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // Hide start screen
  document.getElementById('start-screen').classList.add('hide');

  // Show questions
  document.getElementById('questions').classList.remove('hide');

  // Start presenting questions
  presentQuestion();
}

//time limit for questions
var timeLeft = 60;
var timeInterval;
var timerEl = document.getElementById('countdown');



