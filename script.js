const squareSquare = document.getElementById("square-square");
const squareSquareVid = document.getElementById("square-square-vid");
const evenButton = document.getElementById("even-button");
const oddButton = document.getElementById("odd-button");
const playButton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");

// Ensure controls are disabled
squareSquareVid.controls = false;

// Update video source and reload it
evenButton.addEventListener('click', function() { 
    squareSquare.textContent = "Nothing!"; 
    squareSquareVid.src = "../csp videos/square-square-even.mp4";
    squareSquareVid.load();
}); 
oddButton.addEventListener('click', function() { 
    squareSquare.textContent = "Kite/Kite → Fist/Fist → Pawn/Pawn → Slice on the open layer → Fist/Fist → Kite/Kite"; 
    squareSquareVid.src = "../csp videos/square-square-odd.mp4";
    squareSquareVid.load();
}); 

// External play and pause controls
playButton.addEventListener('click', function() {
    squareSquareVid.play();
});

pauseButton.addEventListener('click', function() {
    squareSquareVid.pause();
});
