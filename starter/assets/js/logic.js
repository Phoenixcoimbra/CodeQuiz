 var currentQuestionIndex = 0;

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

function presentQuestion() {    
    // Get current question
    var currentQuestion = questions[currentQuestionIndex];
    // Display question
    document.getElementById('question-title').textContent = currentQuestion.question;
    // Display options
    document.getElementById('choices-1').textContent = currentQuestion.options[0];
    document.getElementById('choices-2').textContent = currentQuestion.options[1];
    document.getElementById('choices-3').textContent = currentQuestion.options[2];
    document.getElementById('choices-4').textContent = currentQuestion.options[3];
  }

  
  presentQuestion();
