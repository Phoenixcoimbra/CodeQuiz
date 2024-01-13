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

    // // Start timer
    // var time = questions.length * 15;
    // //var timeInterval;
    // var timer = document.getElementById('timer');
    
    // // Start countdown
    // timeInterval = setInterval(function() {
    //     time--;
    //     time.textContent = time;

    //     if (time <= 0) {
    //     // Stop countdown
    //     clearInterval(timeInterval);
    //     // End quiz or show result
    //         endQuiz();

    //     }
    // }, 1000);
 
// /}

// function endQuiz() {
//     // Hide questions
//     document.getElementById('questions').classList.add('hide');

//     // Show end screen
//     document.getElementById('end-screen').classList.remove('hide');

//     // Update final score
//     // updateFinalScore();
// }

function presentQuestion() {    
    // Get current question
    var currentQuestion = questions[currentQuestionIndex];

     //for (questions = 0; i < questions.length; i++) {
    // Display question
    document.getElementById('question-title').textContent = currentQuestion.question;
    // Display options
    document.getElementById('choices-1').textContent = currentQuestion.options[0];
    document.getElementById('choices-2').textContent = currentQuestion.options[1];
    document.getElementById('choices-3').textContent = currentQuestion.options[2];
    document.getElementById('choices-4').textContent = currentQuestion.options[3];
    
}

    presentQuestion();
// //     // // Add event listener to check answer
      document.getElementById('questions').addEventListener('click', checkAnswer);

    // Check answer
    function checkAnswer(answer) {
        // Get the text of the clicked choice
        var correctAnswer = answer.target.textContent;
      
        // Check if the choice is correct
        if (correctAnswer === questions[currentQuestionIndex].answer) {
          // The choice is correct
          console.log("Correct!");
        } else {
          // The choice is incorrect
          console.log("Incorrect!");
        }
        nextQuestion();
      }
    
      checkAnswer();
      
 // Get the next button
    document.getElementById('next').addEventListener('click', nextQuestion);

    function nextQuestion() {   

        // Check if there are more questions
        if (currentQuestionIndex < questions.length - 1) {
            // There are more questions
            currentQuestionIndex++;
            presentQuestion();
        } else {
            // There are no more questions
            endQuiz();
         }

        }
   
    
    // End quiz
    function endQuiz() {
        // Hide questions
        document.getElementById('questions').classList.add('hide');

        // Show end screen
        document.getElementById('end-screen').classList.remove('hide');

    
    }
    endQuiz();
}