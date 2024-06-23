function increaseFontSize(element) {
  currentFontSize = Number(getComputedStyle(element)["fontSize"].slice(0, -2)); // '16px' => '17px'
  element.style.fontSize = String(currentFontSize + 1) + "px";
}

function decreaseFontSize(element) {
  currentFontSize = Number(getComputedStyle(element)["fontSize"].slice(0, -2)); // '16px' => '17px'
  if (currentFontSize > 10) {
    element.style.fontSize = String(currentFontSize - 1) + "px";
  }
}

const text = document.getElementById("dummy-text");
const increaseButton = document.getElementById("increase-size");
const decreaseButton = document.getElementById("decrease-size");
const fontSizeBox = document.getElementById("font-size-rendering");

fontSizeBox.innerText = getComputedStyle(text)["fontSize"];

text.style.lineHeight = 1.5;

increaseButton.addEventListener("click", () => {
  increaseFontSize(text);
  fontSizeBox.innerText = getComputedStyle(text)["fontSize"];
});
decreaseButton.addEventListener("click", () => {
  decreaseFontSize(text);
  fontSizeBox.innerText = getComputedStyle(text)["fontSize"];
});

function changeTextColor(hexColor) {
  text.style.color = "#" + String(hexColor);
}

randomNumber = String(Math.floor(Math.random() * 1000));
randomNumber = randomNumber.padStart(3, "0");
changeTextColor(randomNumber);
