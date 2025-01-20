const videos = document.querySelectorAll('video');
const evenButtons = document.querySelectorAll('.even-button');
const oddButtons = document.querySelectorAll('.odd-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const tabButtons = document.querySelectorAll('.tab-button');

function changeToNormal(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'shield-shield') {
        video.src = "../videos/shields/shield-shield-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'muffin-shield') {
        paragraph.textContent = "Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/muffin-shield-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'leftpawn-shield') {
        paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/leftpawn-shield-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'rightpawn-shield') {
        paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/rightpawn-shield-even.mp4";
        smallTag.style.display = "block";
    } else if (container.id === 'fist-shield') {
        video.src = "../videos/shields/fist-shield-even.mp4";
        noteText.textContent = "Note: Position the shield on the right, and solve 3-3/L such that Pawn/Pawn ends up in the front";
    }
}

function changeToMirror(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'shield-shield') {
        video.src = "../videos/shields/shield-shield-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'muffin-shield') {
        paragraph.textContent = "Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/shield-muffin-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'leftpawn-shield') {
        paragraph.textContent = "Pair/5-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/shield-leftpawn-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'rightpawn-shield') {
        paragraph.textContent = "Pair/5-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/shields/shield-rightpawn-even.mp4";
        smallTag.style.display = "block";
    } else if (container.id === 'fist-shield') {
        video.src = "../videos/shields/shield-fist-even.mp4";
        noteText.textContent = "Note: Position the shield on the left, and solve 3-3/L such that Pawn/Pawn ends up in the front";
    }
}


tabButtons.forEach((tab) => {
    tab.addEventListener('click', event => {
        const container = event.target.closest('.container');
        const activeTab = container.querySelector('.active-tab');

        const paragraph = container.querySelector('p');
        const video = container.querySelector('video');
        const smallTag = container.querySelector('small');
        const noteText = container.querySelector('em');
        const evenButton = container.querySelector('.even-button');
        const oddButton = container.querySelector('.odd-button');

        if (activeTab !== tab) {
            activeTab.classList.remove('active-tab');
            tab.classList.add('active-tab');

            if (tab.id === 'normal') {
                changeToNormal(container, paragraph, video, smallTag, noteText);
            }
            else if (tab.id === 'mirror') {
                changeToMirror(container, paragraph, video, smallTag, noteText);
            }

            evenButton.classList.add('active');
            oddButton.classList.remove('active');
            resetButtonStates(container.querySelectorAll('.control-button'));
        }
    });
});

// Update video source and <p> tag text content when even buttons are clicked
evenButtons.forEach((evenButton) => {
    evenButton.addEventListener('click', (event) => {

        // Find the closest container
        const container = event.target.closest('.container');

        const oddButton = container.querySelector('.odd-button');
        const paragraph = container.querySelector('p');
        const video = container.querySelector('video');
        const smallTag = container.querySelector('small');
        const noteText = container.querySelector('em');
        const activeTab = container.querySelector('.active-tab');

        if (activeTab.id === 'normal') {
            changeToNormal(container, paragraph, video, smallTag, noteText);
        }
        else if (activeTab.id === 'mirror') {
            changeToMirror(container, paragraph, video, smallTag, noteText);
        }

        // Make button darker
        evenButton.classList.add("active");
        oddButton.classList.remove("active");

        video.load();
        resetButtonStates(container.querySelectorAll('.control-button'));
    });
});

oddButtons.forEach((oddButton) => {
    oddButton.addEventListener('click', (event) => {

        // Find the closest container
        const container = event.target.closest('.container');

        const evenButton = container.querySelector('.even-button');
        const paragraph = container.querySelector('p');
        const video = container.querySelector('video');
        const smallTag = container.querySelector('small');
        const noteText = container.querySelector('em');
        const activeTab = container.querySelector('.active-tab');

        if (activeTab.id === 'normal') {
            if (container.id === 'shield-shield') {
                video.src = "../videos/shields/shield-shield-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'muffin-shield') {
                paragraph.textContent = "Scallop/Kite → 4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/shields/muffin-shield-odd.mp4";
                noteText.textContent = "Note: At 4-1-1/L, move both layers to change which face you solve Scallop/Kite in";
                smallTag.style.display = "block";
            } else if (container.id === 'leftpawn-shield') {
                video.src = "../videos/shields/leftpawn-shield-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'rightpawn-shield') {
                video.src = "../videos/shields/rightpawn-shield-odd.mp4";
                smallTag.style.display = "none";
            } else if (container.id === 'fist-shield') {
                video.src = "../videos/shields/fist-shield-odd.mp4";
                noteText.textContent = "Note: Position the shield on the right, and solve 3-3/L such that Pawn/Pawn ends up in the back";
            }
        }
        else if (activeTab.id === 'mirror') {
            if (container.id === 'shield-shield') {
                video.src = "../videos/shields/shield-shield-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'muffin-shield') {
                paragraph.textContent = "Kite/Scallop → L/4-1-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
                video.src = "../videos/shields/shield-muffin-odd.mp4";
                noteText.textContent = "Note: At L/4-1-1, move both layers to change which face you solve Kite/Scallop in";
                smallTag.style.display = "block";
            } else if (container.id === 'leftpawn-shield') {
                video.src = "../videos/shields/shield-leftpawn-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'rightpawn-shield') {
                video.src = "../videos/shields/shield-rightpawn-odd.mp4";
                smallTag.style.display = "none";
            } else if (container.id === 'fist-shield') {
                video.src = "../videos/shields/shield-fist-odd.mp4";
                noteText.textContent = "Note: Position the shield on the left, and solve 3-3/L such that Pawn/Pawn ends up in the back";
            }
        }

        // Make button darker
        oddButton.classList.add("active");
        evenButton.classList.remove("active");

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



