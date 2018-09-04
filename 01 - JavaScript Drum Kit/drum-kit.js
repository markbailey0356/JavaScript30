const aBtn = document.querySelector("#a");

window.addEventListener("keydown", keyDrum);

aBtn.addEventListener("click", clickDrum);
aBtn.addEventListener("transitionend", releaseDrum);

function keyDrum(e) {
  var drumNode = document.querySelector('div[data-key="'+e.keyCode+'"]')
  if (drumNode)
    hitDrum(drumNode);
}

function clickDrum(e) {
  hitDrum(e.currentTarget);
}

function hitDrum(drumNode) {
  drumNode.classList.add("playing");
  var keyCode = drumNode.getAttribute("data-key");
  var sound = document.querySelector('audio[data-key="'+keyCode+'"]');
  sound.play();
}

function releaseDrum(e) {
  e.currentTarget.classList.remove("playing");
}
