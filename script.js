document.getElementById("year").textContent = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", function () {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 3;

  const valueInput = document.getElementById("valueInput");
  const valueButton = document.getElementById("valueButton");
  const feedback = document.getElementById("feedback");

  function handleGuess() {
    const userGuess = parseInt(valueInput.value);

    // To check if input is not a number....
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      feedback.textContent =
        "😁 Kindly enter a valid number between 1 and 100.";
      feedback.style.color = "red";
      return;
    }

    attempts--;

    if (userGuess === randomNumber) {
      feedback.textContent = `🎉 Congratulations! You guessed the right number (${randomNumber}).`;
      feedback.style.color = "green";
      valueButton.disabled = true;
    } else if (attempts > 0) {
      feedback.textContent =
        userGuess < randomNumber ? "🙄 Too low!," : "🤨 Too high!,";
      feedback.style.color = "purple";
      feedback.textContent += ` You have ${attempts} ${
        attempts === 1 ? "attempt" : "attempts"
      } left.`;
    } else {
      feedback.textContent = `😔 Sorry!, you've run out of attempts. The number was ${randomNumber}.`;
      feedback.style.color = "red";
      valueButton.disabled = true;
    }

    valueInput.value = "";
  }
  // Add click event listener to the guess button
  valueButton.addEventListener("click", handleGuess);

  // Add keypress event listener to the input field
  valueInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      handleGuess();
    }
  });
});
