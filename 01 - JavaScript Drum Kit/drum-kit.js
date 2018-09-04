const drums = document.querySelectorAll(".key");

window.addEventListener("keydown", keyDrum);

drums.forEach((drum) => {
  drum.addEventListener("click", clickDrum);
  drum.addEventListener("transitionend", releaseDrum);
});

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
  sound.currentTime = 0;
  sound.play();
}

function releaseDrum(e) {
  e.currentTarget.classList.remove("playing");
}
