const videos = document.querySelectorAll('video');
const evenButtons = document.querySelectorAll('.even-button');
const oddButtons = document.querySelectorAll('.odd-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');


// Update video source and <p> tag text content when even buttons are clicked
evenButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Find the closest container
        const container = event.target.closest('.container');

        const paragraph = container.querySelector('p');
        const video = container.querySelector('video');
        const smallTag = container.querySelector('small');
        const noteText = container.querySelector('em');

        if (container.id === 'square-square') {
            paragraph.textContent = "Nothing!";
            video.src = "../videos/squares/square-square-even.mp4";
            smallTag.style.display = "none";
        } else if (container.id === 'shield-square') {
            paragraph.textContent = "Fist/Fist → Kite/Kite";
            video.src = "../videos/squares/shield-square-even.mp4";
        } else if (container.id === 'muffin-square') {
            paragraph.textContent = "Fist/Fist → Kite/Kite";
            video.src = "../videos/squares/muffin-square-even.mp4";
            smallTag.style.display = "none";
        } else if (container.id === 'scallop-square') {
            video.src = "../videos/squares/scallop-square-even.mp4";
            noteText.textContent = "Note: Hold the edges on the right. Also, be sure to solve Scallop/Kite into the front";
        } else if (container.id === 'pawn-square') {
            video.src = "../videos/squares/pawn-square-even.mp4";
            noteText.textContent = "Note: Be sure to solve Scallop/Kite into the front";
        } else if (container.id === 'barrel-square') {
            paragraph.textContent = "Pawn/Pawn → Star/4-4 → Scallop/Scallop → Barrel/Barrel → Kite/Kite";
            video.src = "../videos/squares/barrel-square-even.mp4";
        } else if (container.id === 'fist-square') {
            video.src = "../videos/squares/fist-square-even.mp4";
            noteText.textContent = "Note: Solve 4-1-1/L such that Scallop/Kite ends up in the front";
        } else if (container.id === 'kite-square') {
            paragraph.textContent = "Fist/Fist → Shield/Kite → L/3-1-2 → Shield/Square → Fist/Fist → Kite/Kite"
            video.src = "../videos/squares/kite-square-even.mp4";
            noteText.textContent = "Note: Start with the kite facing left";
        }


        video.load();
        resetButtonStates(container.querySelectorAll('.control-button'));
    });
});

oddButtons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // Find the closest container
        const container = event.target.closest('.container');

        const paragraph = container.querySelector('p');
        const video = container.querySelector('video');
        const smallTag = container.querySelector('small');
        const noteText = container.querySelector('em');

        if (container.id === 'square-square') {
            paragraph.textContent = "Kite/Kite → Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
            video.src = "../videos/squares/square-square-odd.mp4";
            smallTag.style.display = "block";
        } else if (container.id === 'shield-square') {
            paragraph.textContent = "L/3-1-2 → 3-2-1/L → Square/Shield → Fist/Fist → Kite/Kite";
            video.src = "../videos/squares/shield-square-odd.mp4";
        } else if (container.id === 'muffin-square') {
            paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
            video.src = "../videos/squares/muffin-square-odd.mp4";
            smallTag.style.display = "block";
        } else if (container.id === 'scallop-square') {
            video.src = "../videos/squares/scallop-square-odd.mp4";
            noteText.textContent = "Note: Hold the edges on the right. Also, be sure to solve Scallop/Kite into the back";
        } else if (container.id === 'pawn-square') {
            video.src = "../videos/squares/pawn-square-odd.mp4";
            noteText.textContent = "Note: Be sure to solve Scallop/Kite into the back";
        } else if (container.id === 'barrel-square') {
            paragraph.textContent = "Pawn/Pawn → Star/4-4 → Shield/Shield → Barrel/Barrel → Kite/Kite";
            video.src = "../videos/squares/barrel-square-odd.mp4";
        } else if (container.id === 'fist-square') {
            video.src = "../videos/squares/fist-square-odd.mp4";
            noteText.textContent = "Note: Solve 4-1-1/L such that Scallop/Kite ends up in the back";
        } else if (container.id === 'kite-square') {
            paragraph.textContent = "Fist/Fist → Shield/Kite → 3-1-2/L → Shield/Square → Fist/Fist → Kite/Kite"
            video.src = "../videos/squares/kite-square-odd.mp4";
            noteText.textContent = "Note: Start with the kite facing right";
        }

        video.load();
        resetButtonStates(container.querySelectorAll('.control-button'));
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



