let score = 0;

// Update the score based on the user's answers
function updateScore(answer) {
    if (answer === 'correct') {
        score += 1;
    }
}

//incorrect answer will penalize the score by ten seconds
function penalizeScore() {
   score -= 10;
}

// Example usage
updateScore('correct');
console.log(score); // Output: 1

// update the final score
function updateFinalScore() {
    document.getElementById('final-score').innerHTML = score;
}   
