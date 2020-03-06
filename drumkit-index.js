function playSounds(keyInput) {

  switch (keyInput) {

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "a":
      var kick = new Audio("sounds/kick.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom4.mp3");
      tom4.play();
      break;

    default:
      console.log("no action for this key: " + keyInput);
  }
}


function buttonAnimation(keyInput){

  var activeButton = document.querySelector("."+keyInput);

  activeButton.classList.add("pressed");

  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100)
}


for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    playSounds(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
})
}

document.addEventListener("keydown", function(event) {
  playSounds(event.key);
  buttonAnimation(event.key);
})
