const sounds = [
    "sounds/crash.mp3",
    "sounds/kick-bass.mp3",
    "sounds/snare.mp3",
    "sounds/tom-1.mp3",
    "sounds/tom-2.mp3",
    "sounds/tom-3.mp3",
    "sounds/tom-4.mp3"
];

document.querySelectorAll(".drum").forEach(function(button, index) {
    button.addEventListener("click", function() {
        makeNoise(index, button.innerHTML);
    });
});

document.addEventListener("keydown", function(event) {
    switch(event.key) {
        case "w":
            makeNoise(0, event.key);
            break;
        case "a":
            makeNoise(1, event.key);
            break;
        case "s":
            makeNoise(2, event.key);
            break;
        case "d":
            makeNoise(3, event.key);
            break;
        case "j":
            makeNoise(4, event.key);
            break;
        case "k":
            makeNoise(5,  event.key);
            break;
        case "l":
            makeNoise(6, event.key);
            break;
        default:
            alert("Wciśnij inny klawisz.");
    }
});

function makeNoise(index, key) {
    var audio = new Audio(sounds[index]);
        audio.play();
    changeBackground(key);
}

function changeBackground(key) {
    var button = document.querySelector("." + key);
    var defaultColor = window.getComputedStyle(button).borderColor;

    button.style.borderColor = "white";

    setTimeout(function() {
        button.style.borderColor = defaultColor;
    }, 100);
}