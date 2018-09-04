const aBtn = document.querySelector("#a");

window.addEventListener("keydown", keyDrum);

aBtn.addEventListener("click", clickDrum);
aBtn.addEventListener("transitionend", releaseDrum);

function keyDrum(e) {
  if (e.keyCode == 65) {
    hitDrum();
  }
}

function clickDrum(e) {
  hitDrum();
}

function hitDrum() {
  aBtn.classList.add("playing");
  var keyCode = aBtn.getAttribute("data-key");
  var sound = document.querySelector('audio[data-key="'+keyCode+'"]');
  sound.play();
}

function releaseDrum() {
  aBtn.classList.remove("playing");
}
