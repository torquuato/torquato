let isPlaying = false;
const audio = document.getElementById("bg-music");
const button = document.getElementById("music-toggle");

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        button.src = "/torquato/assets/music-off.png"; // change button image
    } else {
        audio.play();
        button.src = "/torquato/assets/music-on.png"; // change button image
    }
    isPlaying = !isPlaying;
}