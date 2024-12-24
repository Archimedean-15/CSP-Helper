const videos = document.querySelectorAll('video');
const evenButtons = document.querySelectorAll('.even-button');
const oddButtons = document.querySelectorAll('.odd-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');


// Ensure controls are disabled
// squareSquareVid.controls = false;



// Update video source and <p> tag text content when even buttons are clicked
evenButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Find the closest container
        const container = event.target.closest('.container');
        if (container) {
            // Update the <p> tag within this container
            const paragraph = container.querySelector('p');
            const video = container.querySelector('video'); // Video in the same container

            if (container.id === 'square-square') {
                paragraph.textContent = "Nothing!";
                video.src = "../videos/squares/square-square-even.mp4";
            } else if (container.id === 'shield-square') {
                paragraph.textContent = "Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/shield-square-even.mp4";
            }

            video.load(); // Reload the video
        }
    });
});

// Update video source and <p> tag text content when odd buttons are clicked
oddButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Find the closest container
        const container = event.target.closest('.container');
        if (container) {
            // Update the <p> tag within this container
            const paragraph = container.querySelector('p');
            const video = container.querySelector('video'); // Video in the same container

            if (container.id === 'square-square') {
                paragraph.textContent = "Kite/Kite → Fist/Fist → Pawn/Pawn → Slice on the open layer → Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/square-square-odd.mp4";
            } else if (container.id === 'shield-square') {
                paragraph.textContent = "L/3-1-2 → 3-2-1/L → Square/Shield → Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/shield-square-odd.mp4";
            }

            video.load(); // Reload the video
        }
    });
});

playButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const container = event.target.closest('.container');
        const video = container.querySelector('video'); // Video in the same container
        video.play(); 

        const playButton = container.querySelector('.play-button');
        const pauseButton = container.querySelector('.pause-button');
        toggleActiveButton(playButton, pauseButton);
    });
});

pauseButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        const container = event.target.closest('.container');
        const video = container.querySelector('video'); // Video in the same container
        video.pause();

        const playButton = container.querySelector('.play-button');
        const pauseButton = container.querySelector('.pause-button');
        toggleActiveButton(pauseButton, playButton);
    });
});

videos.forEach((video) => {
    video.addEventListener('ended', (event) => {
        const container = event.target.closest('.container');
        controlButtons = container.querySelectorAll('.control-button');
        resetButtonStates(controlButtons);
    });
});

// Helper functions
function toggleActiveButton(activeButton, inactiveButton) {
    activeButton.classList.add("active");
    inactiveButton.classList.remove("active");
}

function resetButtonStates(buttons) {
    buttons.forEach((button) => {
        button.classList.remove("active");
    });
}



