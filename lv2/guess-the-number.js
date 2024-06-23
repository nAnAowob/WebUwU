let counter = 1;

function checkAnswer(guess, answer) {
  if (guess < answer) {
    return "No, your guess is too small.";
  } else if (guess > answer) {
    return "No, your guess is too big.";
  } else {
    return "Correct!";
  }
}

function createAttempt(guessList) {
  const guessTrial = document.createElement("li");
  const guessAttempt = document.createElement("input");
  const checkButton = document.createElement("button");

  checkButton.append("Check!");

  checkButton.addEventListener("click", () => {
    let result = checkAnswer(guessAttempt.value, answer);
    guessTrial.append(result);
    if (result !== "Correct!") {
      createAttempt(guessList);
    }
  });

  guessTrial.append(
    `${counter} Trial: Enter your guess: `,
    guessAttempt,
    " ",
    checkButton,
    " "
  );

  guessList.append(guessTrial);
}

const answer = Math.ceil(Math.random() * 100);
let guess; // undefined

const guessList = document.getElementsByTagName("ol")[0];

while (guess !== answer) {
  const guessTrial = document.createElement("li");
  const guessAttempt = document.createElement("input");
  const checkButton = document.createElement("button");

  checkButton.append("Check!");
  checkButton.addEventListener("click", () => {
    let result = checkAnswer(guessAttempt.value, answer);
    guessTrial.append(result);
    if (result !== "Correct!") {
      createAttempt(guessList);
    }
  });

  guessTrial.append(
    "1 Trial: Enter your guess: ",
    guessAttempt,
    " ",
    checkButton,
    " "
  );

  guessList.append(guessTrial);

  counter += 1;
  //}
}