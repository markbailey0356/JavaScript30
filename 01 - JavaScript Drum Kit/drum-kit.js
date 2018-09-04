const aBtn = document.querySelector("#a");
console.log(aBtn);

aBtn.addEventListener("click", hitDrum);
aBtn.addEventListener("transitionend", releaseDrum);

function hitDrum() {
  console.log("The 'a' drum has been hit!");
  aBtn.classList.add("playing");
  var keyCode = aBtn.getAttribute("data-key");
  var sound = document.querySelector('audio[data-key="'+keyCode+'"]');
  sound.play();
}

function releaseDrum() {
  aBtn.classList.remove("playing");
}
