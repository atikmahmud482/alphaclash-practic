function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function setBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function getARandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetNum = alphabets.split('');
    const randomIndex = Math.floor(Math.random() * alphabetNum.length);
    return alphabetNum[randomIndex];

    // console.log(randomIndex);

}