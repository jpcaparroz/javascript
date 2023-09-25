const colors = ["Red", "White", "Blue", "Yellow", "Purple", "Grey", "Green"];
const button = document.getElementById("changeColor");

button.addEventListener("click", function () {
  let randomNumber = getRandomColor(colors.length);
  let randomColorName = String(colors[randomNumber]);

  document.getElementById("colorText").innerHTML = randomColorName;
  return (document.body.style.background = colors[randomNumber]);
});

function getRandomColor(max) {
  return Math.floor(Math.random() * max);
}
