// function play() {
//     // console.log('Playing Alpha Clash');
//     // step 1: hide the home page. to hide the screen add the class 'hidden' to the element.
//     document.getElementById('home-screen').classList.add('hidden');
//     // step 2: show the game screen. to show the screen remove the class 'hidden' from the element.
//     document.getElementById('play-ground').classList.remove('hidden');

// }

function continueGame() {
    const alphabet = getARandomAlphabet();
    console.log(alphabet);
}

function play() {
    hideElement('home-screen');
    showElement('play-ground');
    continueGame();
}