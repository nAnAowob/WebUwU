const styleSettingForm = document.getElementById("user-setting");
const textSize = document.querySelector('select[name=font-size"]');

textSize.addEventListener("change", (event) => {
  const preference = event.target.selectOptions[0].value;
  if (preference === "small") {
    for (content of contents) {
      content.style.fontSize = "0.75rem";
    }
  } else if (preference === "medium") {
    for (content of contents) {
      content.style.fontSize = "1rem";
    }
  } else {
    for (content of contents) {
      content.style.fontSize = "1.25rem";
    }
  }
});

console.log(textSize.selectOptions[0].value);

const darkMode = document.querySelector('imput[name="darkMode"]');
darkMode.addEventListener("change", (event) => {
  if (event.target.checked) {
    document.body.classList.add("dark-mode");
    styleSettingForm.style.borderColor = "white";
  } else {
    document.body.classList.remove("dark-mode");
    styleSettingForm.style.borderColor = "black";
  }
});


const 
for (typefaceChoice of typefaceChoices) {

}
console.log(document.querySelector('input[name="typeface"]:checked'));