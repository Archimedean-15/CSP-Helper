const squareSquare = document.getElementById("square-square");
const squareSquareVid = document.getElementById("square-square-vid");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Ensure controls are disabled
squareSquareVid.controls = false;

// Update video source and reload it
evenButton.addEventListener("click", function () {
    squareSquare.textContent = "Nothing!";
    squareSquareVid.src = "../csp videos/square-square-even.mp4";
    squareSquareVid.load();
    resetButtonStates();
});
oddButton.addEventListener("click", function () {
    squareSquare.textContent =
        "Kite/Kite → Fist/Fist → Pawn/Pawn → Slice on the open layer → Fist/Fist → Kite/Kite";
    squareSquareVid.src = "../csp videos/square-square-odd.mp4";
    squareSquareVid.load();
    resetButtonStates();
});

// Play button logic
playButton.addEventListener("click", function () {
    squareSquareVid.play();
    toggleActiveButton(playButton, pauseButton);
});

// Pause button logic
pauseButton.addEventListener("click", function () {
    squareSquareVid.pause();
    toggleActiveButton(pauseButton, playButton);
});

// Reset button states when the video ends
squareSquareVid.addEventListener("ended", function () {
    resetButtonStates();
});

// Helper functions
function toggleActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
}

function resetButtonStates() {
    playButton.classList.remove("active");
    pauseButton.classList.remove("active");
}

