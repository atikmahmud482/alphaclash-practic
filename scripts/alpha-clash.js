// function play() {
//     // console.log('Playing Alpha Clash');
//     // step 1: hide the home page. to hide the screen add the class 'hidden' to the element.
//     document.getElementById('home-screen').classList.add('hidden');
//     // step 2: show the game screen. to show the screen remove the class 'hidden' from the element.
//     document.getElementById('play-ground').classList.remove('hidden');

// }
// function handleKeyboardButtonPress() {
//     console.log('Key pressed');
// }
document.addEventListener('keyup', function (event) {
    // console.log(event.key);
    const currentAlphabet = document.getElementById('current-alphabet');
    const currentAlphabetValue = currentAlphabet.innerText;
    const expectedAlphabet = currentAlphabetValue.toLowerCase();
    // console.log(expectedAlphabet);

    if (event.key === expectedAlphabet) {
        // console.log('Correct');
        removeBackgroundColor(expectedAlphabet);
        continueGame();
    }
    else {
        // console.log('Game over');
    }


});

function continueGame() {
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    setBackgroundColorById(alphabet);



}

function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}       