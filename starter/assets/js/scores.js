
let score = 0;

// Update the score based on the user's answers
function updateScore(answer) {
    if (answer === 'correct') {
        score++;
    }
    updateFinalScore(); // Call the updateFinalScore function after updating the score
}

//incorrect answer will penalize the score by ten seconds
function penalizeScore() {
   score -= 10;
}

// save score to localStorage
localStorage.setItem('score', score);

// Get the score from localStorage
score = localStorage.getItem('score');

// clear highscores from localStorage
function clearScore() {
    localStorage.removeItem('score');
}




// update the final score
function updateFinalScore() {
    document.getElementById('final-score').innerHTML = score;
}

// Example usage
updateScore('correct');
console.log(score); // Output: 1

//save initials and score to localStorage use submit button
function saveScore() {
    // Get the initials from the input field
    var initials = document.getElementById('initials').value;
    // Save the initials and score to localStorage
    localStorage.setItem('initials', initials);
    localStorage.setItem('score', score);
    
    // Redirect from local storage to highscores page
    window.location.href = 'highscores.html';
}

