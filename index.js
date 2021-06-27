for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    makeSound(this.innerHTML);

    buttonAnimation(this.innerHTML);
  });
}

// for loop to detect the classes and the mouse click on the buttons of that specific class

document.addEventListener("keydown", function(event) {
  makeSound(event.key);

  buttonAnimation(event.key);
});

// keydown event to detect the keypress

function makeSound(key) {

  switch (key) {

    case "w":
      var audio = new Audio("sounds/tom-1.mp3")
      audio.play();
      break;

    case "a":
      var audio1 = new Audio("sounds/tom-2.mp3")
      audio1.play();
      break;

    case "s":
      var audio2 = new Audio("sounds/tom-3.mp3")
      audio2.play();
      break;

    case "d":
      var audio3 = new Audio("sounds/tom-4.mp3")
      audio3.play();
      break;

    case "j":
      var audio4 = new Audio("sounds/snare.mp3")
      audio4.play();
      break;

    case "k":
      var audio5 = new Audio("sounds/crash.mp3")
      audio5.play();
      break;

    case "l":
      var audio6 = new Audio("sounds/kick-bass.mp3")
      audio6.play();
      break;

    default:
      console.log(buttoninnerHtml);

  }
}

// In this we created a function called makesound and gave the inputs to it from both the keyboard and mouse by clicking on buttons and the keys.
// The document.addEventListener("keydown", function()) created an anonymousfunction to take keyboard inputs.


function buttonAnimation(currentkey) {
  document.querySelector("." + currentkey).classList.add("pressed");

  setTimeout(removeAnimation, 100, currentkey);
}

function removeAnimation(currentkey) {
  document.querySelector("." + currentkey).classList.remove("pressed");
}

// Here, we are adding animation to the buttons when they are clicked and we are
// setting 300 milliseconds of timeout to remove the animation by removing the class containing animation
