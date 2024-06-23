// event
button = document.getElementById("submit-button");
//addEventListener(event, callbackFunction)
button.addEventListener("click", function () {
  console.log("The button is clicked");
  firstInput = document.getElementById("first-input");
  secondInput = document.getElementById("addent");
  resultElement = document.getElementById("result");
  operator = document.getElementById("operator");
  if (operator.value === "+") {
    resultElement.innerText = Number(firstInput.value) + Number(secondInput.value);
  }
  else if (operator.value === "-") {
    resultElement.innerText =
      Number(firstInput.value) - Number(secondInput.value);
  }
  else if (operator.value === "*") {
    resultElement.innerText =
      Number(firstInput.value) * Number(secondInput.value);
  }
  else if (operator.value === "/") {
    resultElement.innerText =
      Number(firstInput.value) / Number(secondInput.value);
  }
});
