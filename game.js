var buttonColors = ["yellow", "green", "blue", "red"];
var gameSequence = [];
var userSequence = [];

// function to play sounds by colorInputs
function playSounds(colorInput) {

  switch (colorInput) {

    case "red":
      var redSound = new Audio("sounds/red.mp3");
      redSound.play();
      break;

    case "blue":
      var blueSound = new Audio("sounds/blue.mp3");
      blueSound.play();
      break;

    case "green":
      var greenSound = new Audio("sounds/green.mp3");
      greenSound.play();
      break;

    case "yellow":
      var yellowSound = new Audio("sounds/yellow.mp3");
      yellowSound.play();
      break;

    case "wrong":
      var wrongSound = new Audio("sounds/wrong.mp3");
      wrongSound.play();
      break;

    default:
      console.log("No sound to play because playSounds input passed is: " + colorInput)
  }
};


// function that adds a random color from buttonColors array to the gameSequence array
// make the function also flash the button and play the sound according to the color picked
function nextSequence() {
  var nextColor = buttonColors[Math.floor(Math.random() * 4)];
  gameSequence.push(nextColor);

  playSounds(nextColor);

  $("." + nextColor).addClass("pressed");
  setTimeout(function() {
    $("." + nextColor).removeClass("pressed");
  }, 100)

};

// wait for a keydown event to run the nextSequence function for the first time
// make sure the document stops listening for a keydown after the first occurence

var keypressEnabled = true;

$(document).on("keydown", function() {
  if (keypressEnabled) {

    setTimeout(function() {
      nextSequence();
    }, 500);

    $("#level-title").text("Level " + gameSequence.length);
    console.log(gameSequence.length);
    console.log(gameSequence);

    keypressEnabled = false;
  }
});



// after the document stops listening for a keydown make the buttons wait for a click addEventListener
// run the nextSequence function if the correct button is clicked

$(".btn").on("click", function(event) {
  if (keypressEnabled == false) {
    userSequence.push(event.target.classList["1"]);
    console.log(event.target.classList["1"] == gameSequence[userSequence.length - 1]);
    if (event.target.classList["1"] != gameSequence[userSequence.length - 1]) {
      $("#level-title").html("<p>Game Over, Score: " + gameSequence.length + "</p><p>Press A Key To Restart</p>");
      playSounds("wrong")
      console.log("wrong answer. user: " + userSequence + " vs game: " + gameSequence)
      gameSequence = [];
      userSequence = [];
      keypressEnabled = true
    } else if (userSequence.length < gameSequence.length) {
      console.log("waiting for " + (gameSequence.length - userSequence.length) + " more clicks")
    } else if (userSequence.length == gameSequence.length) {
      if (userSequence.toString() == gameSequence.toString()) {
        console.log("right answer. user: " + userSequence + " vs game: " + gameSequence);
        setTimeout(function() {
          nextSequence();
        }, 500);
        $("#level-title").text("Level " + gameSequence.length);
        userSequence = [];
      } else {
        console.log("problem somwhere!!!");
      }
    } else {
      console.log("problem: userSequence.length is " + userSequence.length + " vs a gameSequence.length of " + gameSequence.length)
    }
  }
});
