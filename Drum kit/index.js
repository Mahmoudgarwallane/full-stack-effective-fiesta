// triggers when a button is clicked and calls [playSound]
document.querySelectorAll(".drum").forEach((item) => {
  item.addEventListener("click", function () {
    var buttonContent = item.innerHTML;
    playSound(buttonContent);
    activeButton(buttonContent);
  });
});

// triggers when a key is down and calls [playSound]
document.addEventListener("keydown", function (keyboardEvent) {
  var key = keyboardEvent.key;
  console.log(key);
  playSound(key);
  activeButton(key);
});

// play sound function
function playSound(value) {
  switch (value) {
    case "w":
      var snare = new Audio("sounds/crash.mp3");
      snare.play();
      break;
    case "a":
      var snare = new Audio("sounds/kick-bass.mp3");
      snare.play();
      break;
    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "d":
      var snare = new Audio("sounds/tom-1.mp3");
      snare.play();
      break;
    case "j":
      var snare = new Audio("sounds/tom-2.mp3");
      snare.play();
      break;
    case "k":
      var snare = new Audio("sounds/tom-3.mp3");
      snare.play();
      break;
    case "l":
      var snare = new Audio("sounds/tom-4.mp3");
      snare.play();
      break;
    default:
      console.log(button);
      break;
  }
}

function activeButton(key) {
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function () {
    document.querySelector("." + key).classList.remove("pressed"), 100;
  });
}
