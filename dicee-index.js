// dice throws 1-6
var throw1 = (Math.floor(Math.random()*5))+1
var throw2 = (Math.floor(Math.random()*5))+1

// set images to above dice rolls
document.querySelector(".img1").setAttribute("src","images/dice"+throw1+".png");
document.querySelector(".img2").setAttribute("src","images/dice"+throw2+".png");

// change title to display winner or draw
if (throw1 > throw2) {
  document.querySelector(".container h1").textContent = "Player 1 wins";
}
else if (throw1 < throw2) {
  document.querySelector(".container h1").textContent = "Player 2 wins";
}
else {
  document.querySelector(".container h1").textContent = "It's a draw!";
}
