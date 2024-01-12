let score = 0;

// Update the score based on the user's answers
function updateScore(answer) {
    if (answer === 'correct') {
        score += 1;
    }
}

// Example usage
updateScore('correct');
console.log(score); // Output: 1
