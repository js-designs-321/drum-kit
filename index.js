var buttons = document.querySelectorAll("button");

function playAudio(inputRecieved){
  switch (inputRecieved) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "k":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "l":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    default:
      console.log(inputRecieved);

  }
}

function animateButton(inputRecieved){
  var activeButton = document.querySelector("."+inputRecieved);
  activeButton.classList.add("pressed");
  setTimeout(function(){
    activeButton.classList.remove("pressed");
  },100);
}

for (var i = 0; i < 7; i++) {
  buttons[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerText;
    playAudio(buttonInnerHTML);
    animateButton(buttonInnerHTML);
  });
}

document.addEventListener("keydown",function(e){
  playAudio(e.key);
  animateButton(e.key);
});


// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
