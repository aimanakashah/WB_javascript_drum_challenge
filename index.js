// const tekan = document.querySelectorAll(".drum");

// tekan.forEach(drum => {
//   drum.addEventListener("click", play);
// })

// const drumSoundFiles = {
//   "w": "crash.mp3", 
//   "a": "kick-bass.mp3", 
//   "s": "snare.mp3",
//   "d": "tom-1.mp3", 
//   "j": "tom-2.mp3",
//   "k": "tom-3.mp3",
//   "l": "tom-4.mp3"
// }

// function play(event) {
//   const pressedKey = event.target.classList[0];
//   const soundFile = drumSoundFiles[pressedKey];

//   const audio = new Audio(`sounds/${soundFile}`)
//   audio.play()
// };

var tekan = document.querySelectorAll(".drum");

tekan.forEach(drum => {
    drum.addEventListener("click", play);
});

function play() {
    var soundFile = this.getAttribute("data-sound");
    var audio = new Audio('sounds/' + soundFile);
    audio.play();
}