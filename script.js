function generateRandomColor() {
    var colors = ['Red', 'Green', 'Blue', 'Yellow', 'Orange', 'Purple'];
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

function compareColors(chosenColor, targetColor) {
    if (chosenColor.toLowerCase() === targetColor.toLowerCase()) {
        alert("Correct! You guessed the right color.");
        score++;
        updateScore();
        generateNewColor();
    } else {
        alert("Wrong guess. Try again.");
    }
}

function updateScore() {
    var scoreDisplay = document.getElementById("score");
    scoreDisplay.textContent = "Score: " + score;
}

function generateNewColor() {
    var targetColor = generateRandomColor();
    var colorDisplay = document.getElementById("colorDisplay");
    colorDisplay.textContent = targetColor;
}

var score = 0;
var guessInput = document.getElementById("guess");
guessInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        var chosenColor = guessInput.value;
        var targetColor = document.getElementById("colorDisplay").textContent;
        compareColors(chosenColor, targetColor);
        guessInput.value = "";
    }
});

window.onload = function() {
    generateNewColor();
    updateScore();
};