let isPlaying = false;
const audio = document.getElementById("bg-music");
const button = document.getElementById("music-toggle");

function toggleMusic() {
    if (isPlaying) {
        audio.pause();
        button.src = "assets/music-off.png"; // change button image
    } else {
        audio.play();
        button.src = "assets/music-on.png"; // change button image
    }
    isPlaying = !isPlaying;
}