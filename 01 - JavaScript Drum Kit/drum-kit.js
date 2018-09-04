const aBtn = document.querySelector("#a");
console.log(aBtn);

aBtn.addEventListener("click", hitDrum);

function hitDrum() {
  console.log("The 'a' drum has been hit!");
}
