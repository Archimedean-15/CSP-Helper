const videos = document.querySelectorAll('video');
const evenButtons = document.querySelectorAll('.even-button');
const oddButtons = document.querySelectorAll('.odd-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const tabButtons = document.querySelectorAll('.tab-button');

function changeToNormal(container, paragraph, video, smallTag, noteText) {
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
        paragraph.textContent = "L/4-1-1 → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/scallop-square-even.mp4";
        noteText.textContent = "Note: Hold the edges on the right. Also, be sure to solve Scallop/Kite into the front";
    } else if (container.id === 'pawn-square') {
        paragraph.textContent = "L/4-1-1 → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/pawn-square-even.mp4";
        noteText.textContent = "Note: Hold edges on the left, and be sure to solve Scallop/Kite into the front";
    } else if (container.id === 'barrel-square') {
        paragraph.textContent = "Pawn/Pawn → Star/4-4 → Scallop/Scallop → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/squares/barrel-square-even.mp4";
        noteText.textContent = "Note: You must start with the 2 left corners in the front and the 2 right corners in the back";
    } else if (container.id === 'fist-square') {
        paragraph.textContent = "Pawn/Kite → 4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/fist-square-even.mp4";
        noteText.textContent = "Note: Solve 4-1-1/L such that Scallop/Kite ends up in the front";
    } else if (container.id === 'kite-square') {
        paragraph.textContent = "Fist/Fist → Shield/Kite → L/3-1-2 → Shield/Square → Fist/Fist → Kite/Kite"
        video.src = "../videos/squares/kite-square-even.mp4";
        noteText.textContent = "Note: Start with the kite facing left, and make sure the shield in Shield/Kite gets solved on the right";
    }
}

function changeToMirror(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'square-square') {
        paragraph.textContent = "Nothing!";
        video.src = "../videos/squares/square-square-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'shield-square') {
        paragraph.textContent = "Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/square-shield-even.mp4";
    } else if (container.id === 'muffin-square') {
        paragraph.textContent = "Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/square-muffin-even.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'scallop-square') {
        paragraph.textContent = "L/4-1-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/square-scallop-even.mp4";
        noteText.textContent = "Note: Hold the edges on the left. Also, be sure to solve Kite/Scallop into the front";
    } else if (container.id === 'pawn-square') {
        paragraph.textContent = "4-1-1/L → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/squares/square-pawn-even.mp4";
        noteText.textContent = "Note: Hold edges on the right, and be sure to solve Kite/Scallop into the front";
    } else if (container.id === 'barrel-square') {
        paragraph.textContent = "Pawn/Pawn → 4-4/Star → Scallop/Scallop → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/squares/square-barrel-even.mp4";
        noteText.textContent = "Note: You must start with the 2 left corners in the back and the 2 right corners in the front";
    } else if (container.id === 'fist-square') {
        paragraph.textContent = "Pawn/Kite → L/4-1-1 → Scallop/Kite → Fist/Fist → Kite/Kite"
        video.src = "../videos/squares/square-fist-even.mp4";
        noteText.textContent = "Note: Solve L/4-1-1 such that Scallop/Kite ends up in the back";
    } else if (container.id === 'kite-square') {
        paragraph.textContent = "Fist/Fist → Kite/Shield → 3-1-2/L → Square/Shield → Fist/Fist → Kite/Kite"
        video.src = "../videos/squares/square-kite-even.mp4";
        noteText.textContent = "Note: Start with the kite facing right, and make sure the shield in Shield/Kite gets solved on the right";
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
                noteText.textContent = "Note: Hold the edges on the left. Also, be sure to solve Scallop/Kite into the back";
            } else if (container.id === 'pawn-square') {
                video.src = "../videos/squares/pawn-square-odd.mp4";
                noteText.textContent = "Note: Hold edges on the left, and be sure to solve Scallop/Kite into the back";
            } else if (container.id === 'barrel-square') {
                paragraph.textContent = "Pawn/Pawn → Star/4-4 → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/squares/barrel-square-odd.mp4";
            } else if (container.id === 'fist-square') {
                video.src = "../videos/squares/fist-square-odd.mp4";
                noteText.textContent = "Note: Solve 4-1-1/L such that Scallop/Kite ends up in the back";
            } else if (container.id === 'kite-square') {
                paragraph.textContent = "Fist/Fist → Shield/Kite → L/3-2-1 → Shield/Square → Fist/Fist → Kite/Kite"
                video.src = "../videos/squares/kite-square-odd.mp4";
                noteText.textContent = "Note: Start with the kite facing right, and make sure the shield in Shield/Kite gets solved on the right";
            }
        }
        else if (activeTab.id === 'mirror') {
            if (container.id === 'square-square') {
                paragraph.textContent = "Kite/Kite → Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/square-square-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'shield-square') {
                paragraph.textContent = "3-2-1/L → L/3-1-2 → Shield/Square → Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/square-shield-odd.mp4";
            } else if (container.id === 'muffin-square') {
                paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
                video.src = "../videos/squares/square-muffin-odd.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'scallop-square') {
                video.src = "../videos/squares/square-scallop-odd.mp4";
                noteText.textContent = "Note: Hold the edges on the left. Also, be sure to solve Kite/Scallop into the back";
            } else if (container.id === 'pawn-square') {
                video.src = "../videos/squares/square-pawn-odd.mp4";
                noteText.textContent = "Note: Hold edges on the right, and be sure to solve Kite/Scallop into the back";
            } else if (container.id === 'barrel-square') {
                paragraph.textContent = "Pawn/Pawn → 4-4/Star → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/squares/square-barrel-odd.mp4";
            } else if (container.id === 'fist-square') {
                video.src = "../videos/squares/square-fist-odd.mp4";
                noteText.textContent = "Note: Solve L/4-1-1 such that Scallop/Kite ends up in the front";
            } else if (container.id === 'kite-square') {
                paragraph.textContent = "Fist/Fist → Kite/Shield → 3-2-1/L → Square/Shield → Fist/Fist → Kite/Kite"
                video.src = "../videos/squares/square-kite-odd.mp4";
                noteText.textContent = "Note: Start with the kite facing left, and make sure the shield in Shield/Kite gets solved on the right";
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



