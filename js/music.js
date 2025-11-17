const audio = document.getElementById("bg-music");
const slider = document.getElementById("volume-slider");

// Start audio muted (to satisfy browser autoplay rules)
audio.volume = 0;
audio.muted = true;

window.addEventListener("DOMContentLoaded", () => {
    // Try autoplay
    audio.play().then(() => {
        // If autoplay works, allow user volume control
        audio.muted = false;
    }).catch(() => {
        // If autoplay is blocked, wait until first slider input
        console.log("Autoplay blocked; waiting for user input.");
    });
});

// Volume control
slider.addEventListener("input", () => {
    audio.muted = false;               // ensures audio turns on
    audio.volume = slider.value;
});
