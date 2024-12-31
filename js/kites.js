const videos = document.querySelectorAll('video');
const oddButtons = document.querySelectorAll('.odd-button');
const evenButtons = document.querySelectorAll('.even-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const tabButtons = document.querySelectorAll('.tab-button');

function changeToNormal(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'kite-kite') {
        paragraph.textContent = "Slice";
        video.src = "../videos/kites/kite-kite-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'scallop-kite') {
        paragraph.textContent = "Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/scallop-kite-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'shield-kite') {
        paragraph.textContent = "L/3-2-1 → Shield/Square → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/shield-kite-odd.mp4";
        noteText.textContent = "Note: Hold shield on the right and have the kite point away from you";
    } else if (container.id === 'pawn-kite') {
        paragraph.textContent = "4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/pawn-kite-odd.mp4";
        noteText.textContent = "Note: Solve 4-1-1/L by turning both layers";
    } else if (container.id === 'muffin-kite') {
        paragraph.textContent = "Shield/Barrel → Pair/4-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/muffin-kite-odd.mp4";
    } else if (container.id === 'barrel-kite') {
        paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/barrel-kite-odd.mp4";
        smallTag.style.display = "block";
    } else if (container.id === 'fist-kite') {
        paragraph.textContent = "Square/Pawn → L/4-1-1 → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/fist-kite-odd.mp4";
        smallTag.style.display = "block";
        noteText.textContent = "Note: At L/4-1-1, move both layers to change which face you solve Scallop/Kite in";
    }

}

function changeToMirror(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'kite-kite') {
        paragraph.textContent = "Slice";
        video.src = "../videos/kites/kite-kite-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'scallop-kite') {
        paragraph.textContent = "Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/kite-scallop-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'shield-kite') {
        paragraph.textContent = "3-2-1/L → Square/Shield → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/kite-shield-odd.mp4";
        noteText.textContent = "Note: Hold shield on the right and have the kite point towards you";
    } else if (container.id === 'pawn-kite') {
        paragraph.textContent = "L/4-1-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/kite-pawn-odd.mp4";
        noteText.textContent = "Note: Solve L/4-1-1 by turning both layers";
    } else if (container.id === 'muffin-kite') {
        paragraph.textContent = "Barrel/Shield → 4-2/Pair → Shield/Shield → Barrel/Barrel → Kite/Kite";
        video.src = "../videos/kites/kite-muffin-odd.mp4";
    } else if (container.id === 'barrel-kite') {
        paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/kite-barrel-odd.mp4";
        smallTag.style.display = "block";
    } else if (container.id === 'fist-kite') {
        paragraph.textContent = "Pawn/Square → 4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/kites/kite-fist-odd.mp4";
        smallTag.style.display = "block";
        noteText.textContent = "Note: At 4-1-1/L, move both layers to change which face you solve Scallop/Kite in";
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
            if (container.id === 'kite-kite') {
                paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-kite-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'scallop-kite') {
                paragraph.textContent = "4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/scallop-kite-odd.mp4";
                smallTag.style.display = "block";
                noteText.textContent = "Note: At 4-1-1/L, move both layers to change which face you solve Scallop/Kite in";
            } else if (container.id === 'shield-kite') {
                paragraph.textContent = "L/3-1-2 → Shield/Square → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/shield-kite-odd.mp4";
                noteText.textContent = "Note: Hold shield on the right and have the kite point towards you";
            } else if (container.id === 'pawn-kite') {
                paragraph.textContent = "4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/pawn-kite-even.mp4";
                noteText.textContent = "Note: Solve 4-1-1/L by only turning the 4-1-1, not the L";
            } else if (container.id === 'muffin-kite') {
                paragraph.textContent = "Barrel/Shield → Pair/4-2 → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/muffin-kite-even.mp4";
            } else if (container.id === 'barrel-kite') {
                paragraph.textContent = "Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/barrel-kite-even.mp4";
                smallTag.style.display = "none";
            } else if (container.id === 'fist-kite') {
                paragraph.textContent = "Square/Pawn → L/4-1-1 → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/fist-kite-even.mp4";
                smallTag.style.display = "none";
            }
        }
        else if (activeTab.id === 'mirror') {
            if (container.id === 'kite-kite') {
                paragraph.textContent = "Fist/Fist → Pawn/Pawn → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-kite-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'scallop-kite') {
                paragraph.textContent = "L/4-1-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-scallop-even.mp4";
                smallTag.style.display = "block";
                noteText.textContent = "Note: At L/4-1-1, move both layers to change which face you solve Scallop/Kite in";
            } else if (container.id === 'shield-kite') {
                paragraph.textContent = "3-1-2/L → Square/Shield → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-shield-even.mp4";
                noteText.textContent = "Note: Hold shield on the right and have the kite point away from you";
            } else if (container.id === 'pawn-kite') {
                paragraph.textContent = "L/4-1-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-pawn-even.mp4";
                noteText.textContent = "Note: Solve L/4-1-1 by only turning the 4-1-1, not the L";
            } else if (container.id === 'muffin-kite') {
                paragraph.textContent = "Shield/Barrel → 4-2/Pair → Shield/Shield → Barrel/Barrel → Kite/Kite";
                video.src = "../videos/kites/kite-muffin-even.mp4";
            } else if (container.id === 'barrel-kite') {
                paragraph.textContent = "Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-barrel-even.mp4";
                smallTag.style.display = "none";
            } else if (container.id === 'fist-kite') {
                paragraph.textContent = "Pawn/Square → 4-1-1/L → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/kites/kite-fist-even.mp4";
                smallTag.style.display = "none";
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