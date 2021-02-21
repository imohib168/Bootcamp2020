var frames = [
    { transform: "translateX(100%)" },
    { transform: "translateX(-100%)" },
];

var timing = {
    duration: 5500,
    iterations: Infinity,
    playbackRate: -2,
};

var background = document.getElementById("background");

var backgroundMovement = background.animate(frames, timing);

backgroundMovement.currentTime = backgroundMovement.effect.getTiming().duration / 2;

setInterval(function () {
    if (backgroundMovement.playbackRate > 0.4) {
        backgroundMovement.playbackRate *= .9;
    }
}, 3000)

var flyFaster = function () {
    backgroundMovement.playbackRate *= 1.1;
}

document.addEventListener("click", flyFaster);