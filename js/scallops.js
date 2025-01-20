const videos = document.querySelectorAll('video');
const oddButtons = document.querySelectorAll('.odd-button');
const evenButtons = document.querySelectorAll('.even-button');
const playButtons = document.querySelectorAll('.play-button');
const pauseButtons = document.querySelectorAll('.pause-button');
const tabButtons = document.querySelectorAll('.tab-button');

function changeToNormal(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'scallop-scallop') {
        video.src = "../videos/scallops/scallop-scallop-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'shield-scallop') {
        video.src = "../videos/scallops/shield-scallop-odd.mp4";
        noteText.textContent = "Note: Solve with scallop on the right, and solve such that Scallop/Scallop ends up in the front";
    } else if (container.id === 'muffin-scallop') {
        paragraph.textContent = "5-1/Pair → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/scallops/muffin-scallop-odd.mp4";
        noteText.textContent = "Note: Solve with scallop on the left, and solve with the 3 edges on the muffin closest to you";
    } else if (container.id === 'pawn-scallop') {
        paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/scallops/pawn-scallop-odd.mp4";
        noteText.textContent = "Note: Break apart the scallop and preserve the pawn to make the 5-1/Pair";
    }

}

function changeToMirror(container, paragraph, video, smallTag, noteText) {
    if (container.id === 'scallop-scallop') {
        video.src = "../videos/scallops/scallop-scallop-odd.mp4";
        smallTag.style.display = "none";
    } else if (container.id === 'shield-scallop') {
        video.src = "../videos/scallops/scallop-shield-odd.mp4";
        noteText.textContent = "Note: Solve with scallop on the left, and solve such that Scallop/Scallop ends up in the front";
    } else if (container.id === 'muffin-scallop') {
        paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
        video.src = "../videos/scallops/scallop-muffin-odd.mp4";
        noteText.textContent = "Note: Solve with scallop on the left, and solve with the 3 edges on the muffin farthest away from you";
    } else if (container.id === 'pawn-scallop') {
        paragraph.textContent = "Pair/5-1 → Kite/Scallop → Fist/Fist → Kite/Kite";
        video.src = "../videos/scallops/scallop-pawn-odd.mp4";
        noteText.textContent = "Note: Break apart the scallop and preserve the pawn to make the Pair/5-1";
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
            if (container.id === 'scallop-scallop') {
                video.src = "../videos/scallops/scallop-scallop-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'shield-scallop') {
                video.src = "../videos/scallops/shield-scallop-even.mp4";
                noteText.textContent = "Note: Solve with scallop on the right, and solve such that Scallop/Scallop ends up in the back";
            } else if (container.id === 'muffin-scallop') {
                video.src = "../videos/scallops/muffin-scallop-even.mp4";
                noteText.textContent = "Note: Solve with scallop on the left, and solve with the 3 edges on the muffin farthest away from you";
            } else if (container.id === 'pawn-scallop') {
                paragraph.textContent = "5-1/Pair → Kite/Scallop → Fist/Fist → Kite/Kite";
                video.src = "../videos/scallops/pawn-scallop-even.mp4";
                noteText.textContent = "Note: Break apart the scallop and preserve the pawn to make the 5-1/Pair";
            }
        }
        else if (activeTab.id === 'mirror') {
            if (container.id === 'scallop-scallop') {
                video.src = "../videos/scallops/scallop-scallop-even.mp4";
                smallTag.style.display = "block";
            } else if (container.id === 'shield-scallop') {
                video.src = "../videos/scallops/scallop-shield-even.mp4";
                noteText.textContent = "Note: Solve with scallop on the left, and solve such that Scallop/Scallop ends up in the back";
            } else if (container.id === 'muffin-scallop') {
                video.src = "../videos/scallops/scallop-muffin-even.mp4";
                noteText.textContent = "Note: Solve with scallop on the left, and solve with the 3 edges on the muffin closest to you";
            } else if (container.id === 'pawn-scallop') {
                paragraph.textContent = "5-1/Pair → Scallop/Kite → Fist/Fist → Kite/Kite";
                video.src = "../videos/scallops/scallop-pawn-even.mp4";
                noteText.textContent = "Note: Break apart the scallop and preserve the pawn to make the 5-1/Pair";
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