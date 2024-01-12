//import questions from "./questions";

 
// Get the start button
var startButton = document.getElementById('start');

// Add event listener to start button
startButton.addEventListener('click', startQuiz);

function startQuiz() {
  // Hide start screen
  document.getElementById('start-screen').classList.add('hide');

  // Show questions
  document.getElementById('questions').classList.remove('hide');

    // Start countdown
    timeInterval = setInterval(function() {
        time--;
        time.textContent = time;

        if (time <= 0) {
        // Stop countdown
        clearInterval(timeInterval);
        // End quiz or show result
            endQuiz();

        }
    }, 1000);
 
}

presentQuestion();

function presentQuestion() {    
    // Get current question
    var currentQuestion = questions[currentQuestion];
    // Display question
    document.getElementById('question').textContent = currentQuestion.question;
    // Display options
    document.getElementById('option-1').textContent = currentQuestion.options[0];
    document.getElementById('option-2').textContent = currentQuestion.options[1];
    document.getElementById('option-3').textContent = currentQuestion.options[2];
    document.getElementById('option-4').textContent = currentQuestion.options[3];
  }