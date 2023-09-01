// Existing JS functionalities, if any

// Audio Player Controls
const audioElement = document.getElementById('audioElement');
const playPauseBtn = document.getElementById('playPauseBtn');
const playPauseIcon = document.getElementById('playPauseIcon');  // Get the icon element
const volumeSlider = document.getElementById('volumeSlider');

playPauseBtn.addEventListener('click', () => {
    if (audioElement.paused) {
        audioElement.play();
        playPauseIcon.className = "fas fa-pause";  // Switch to Pause Icon
    } else {
        audioElement.pause();
        playPauseIcon.className = "fas fa-play";  // Switch to Play Icon
    }
});

volumeSlider.addEventListener('input', () => {
    audioElement.volume = volumeSlider.value;
});
