const videos = document.querySelectorAll('video');
const oddButtons = document.querySelectorAll('.odd-button');
const evenButtons = document.querySelectorAll('.even-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const tabButtons = document.querySelectorAll('.tab-button');

function changeToNormal(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'barrel-barrel') {
        paragraph.textContent = "Kite/Kite";
        video.src = "../videos/kites/barrel-barrel-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'scallop-barrel') {
        paragraph.textContent = "4-2/Pair → Scallop/Scallop → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/scallop-barrel-odd.mp4";
    } else if (container.id === 'shield-barrel') {
        paragraph.textContent = "Pair/2-2-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/shield-barrel-odd.mp4";
        noteText.textContent = "Note: Hold shield on the right, and solve Pair/2-2-2 such that Shield/Shield ends up in the front"
    } else if (container.id === 'muffin-barrel') {
        paragraph.textContent = "Shield/Kite → L/3-1-2 → Shield/Square → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/muffin-barrel-odd.mp4";
        noteText.textContent = "Note: Hold muffin in the front and slice away the line from muffin to go into Shield/Kite. Also, solve Shield/Kite with the kite facing you";
    } else if (container.id === 'pawn-barrel') {
        paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/pawn-barrel-odd.mp4";
    }

}

function changeToMirror(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'barrel-barrel') {
        paragraph.textContent = "Kite/Kite";
        video.src = "../videos/kites/barrel-barrel-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'scallop-barrel') {
        paragraph.textContent = "Pair/4-2 → Scallop/Scallop → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/barrel-scallop-odd.mp4";
    } else if (container.id === 'shield-barrel') {
        paragraph.textContent = "Pair/2-2-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/barrel-shield-odd.mp4";
        noteText.textContent = "Note: Hold shield on the left, and solve Pair/2-2-2 such that Shield/Shield ends up in the front"
    }  else if (container.id === 'muffin-barrel') {
        paragraph.textContent = "Kite/Shield → 3-1-2/L → Square/Shield → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/barrel-muffin-odd.mp4";
        noteText.textContent = "Note: Hold muffin in the back and slice away the line from muffin to go into Kite/Shield. Also, solve Kite/Shield with the kite facing you";
    } else if (container.id === 'pawn-barrel') {
        paragraph.textContent = "Pair/5-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/barrel-pawn-odd.mp4";
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
        const oddButton = container.querySelector('.odd-button');
        const evenButton = container.querySelector('.even-button');

        if (activeTab !== tab) {
            activeTab.classList.remove('active-tab');
            tab.classList.add('active-tab');

            if (tab.id === 'normal') {
                changeToNormal(container, paragraph, video, smallTag, noteText);
            }
            else if (tab.id === 'mirror') {
                changeToMirror(container, paragraph, video, smallTag, noteText);
            }

            oddButton.classList.add('active');
            evenButton.classList.remove('active');
            resetButtonStates(container.querySelectorAll('.control-button'));
        }
    });
});

// Update video source and <p> tag text content when even buttons are clicked
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
            changeToNormal(container, paragraph, video, smallTag, noteText);
        } 
        else if (activeTab.id === 'mirror') {
            changeToMirror(container, paragraph, video, smallTag, noteText);
        }

        // Make button darker
        oddButton.classList.add("active");
        evenButton.classList.remove("active");

        video.load();
        resetButtonStates(container.querySelectorAll('.control-button'));
    });
});

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
            if (container.id === 'barrel-barrel') {
                paragraph.textContent = "Scallop/Scallop → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/barrel-barrel-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'scallop-barrel') {
                paragraph.textContent = "Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/scallop-barrel-even.mp4";
            } else if (container.id === 'shield-barrel') {
                paragraph.textContent = "Pair/2-2-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/shield-barrel-even.mp4";
                noteText.textContent = "Note: Hold shield on the right, and solve Pair/2-2-2 such that Shield/Shield ends up in the back"
            } else if (container.id === 'pawn-barrel') {
                paragraph.textContent = "3-3/Pair → 4-2/Line → Kite/Scallop → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/pawn-barrel-even.mp4";
            }
        }
        else if (activeTab.id === 'mirror') {
            if (container.id === 'barrel-barrel') {
                paragraph.textContent = "Scallop/Scallop → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/barrel-barrel-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'scallop-barrel') {
                paragraph.textContent = "Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/barrel-scallop-even.mp4";
            } else if (container.id === 'shield-barrel') {
                paragraph.textContent = "Pair/2-2-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/barrel-shield-even.mp4";
                noteText.textContent = "Note: Hold shield on the left, and solve Pair/2-2-2 such that Shield/Shield ends up in the back"
            } else if (container.id === 'pawn-barrel') {
                paragraph.textContent = "Pair/3-3 → Line/4-2 → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/barrel-pawn-even.mp4";
            }
        }

        // Make button darker
        evenButton.classList.add("active");
        oddButton.classList.remove("active");


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