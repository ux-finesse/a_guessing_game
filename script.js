document.addEventListener('DOMContentLoaded', function (){
    const randomNumber = Math.floor(Math.random() * 100) +1;
    let attempts = 6;

    const valueInput = document.getElementById('valueInput');
    const valueButton = document.getElementById('valueButton');
    const feedback = document.getElementById('feedback');

    valueButton.addEventListener('click', function (){
        const userGuess = parseInt(valueInput.value);

        // To check if input is not a number....
        if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
            feedback.textContent = '😁 Kindly enter a valid number between 1 and 100.';
            feedback.style.color = 'red';
            return;
        }

        attempts--;

        if (userGuess === randomNumber) {
            feedback.textContent = `🎉 Congratulations! You guessed the right number (${randomNumber}).`;
            feedback.style.color = 'green';
            valueButton.disabled = true;
        } else if (attempts > 0) {
            feedback.textContent = userGuess < randomNumber ? '🙄 Too low!,' : '🤨 Too high!,';
            feedback.style.color = 'purple';
            feedback.textContent += ` You have ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'} left.`;
        } else {
            feedback.textContent = `😔 Sorry!, you've run out of attempts. The number was ${randomNumber}.`;
            feedback.style.color = 'red';
            valueButton.disabled = true;
        }

        valueInput.value = '';

    });
});
// document.addEventListener('DOMContentLoaded', function () {
//     const randomNumber = Math.floor(Math.random() * 100) + 1;
//     let attempts = 6;

//     const guessInput = document.getElementById('guessInput');
//     const guessButton = document.getElementById('guessButton');
//     const feedback = document.getElementById('feedback');

//     guessButton.addEventListener('click', function () {
//         const userGuess = parseInt(guessInput.value);

//         if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
//             feedback.textContent = 'Please enter a valid number between 1 and 100.';
//             feedback.style.color = 'red';
//             return;
//         }

//         attempts--;

//         if (userGuess === randomNumber) {
//             feedback.textContent = `Congratulations! You guessed the right number (${randomNumber}).`;
//             feedback.style.color = 'green';
//             guessButton.disabled = true;
//         } else if (attempts > 0) {
//             feedback.textContent = userGuess < randomNumber ? 'Too low!' : 'Too high!';
//             feedback.style.color = 'orange';
//             feedback.textContent += ` You have ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'} left.`;
//         } else {
//             feedback.textContent = `Sorry, you've run out of attempts. The number was ${randomNumber}.`;
//             feedback.style.color = 'red';
//             guessButton.disabled = true;
//         }

//         guessInput.value = '';
//     });
// });



