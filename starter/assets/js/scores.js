
let score = 0;

// Update the score based on the user's answers
function updateScore(answer) {
    if (answer === 'correct') {
        score++;
    } else {
        penalizeScore();
    }
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



// Example usage
updateScore('correct');
console.log(score); // Output: 1

// update the final score
function updateFinalScore() {
    document.getElementById('final-score').innerHTML = score;
}   

