function hideElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden');
}

function showElement(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

function getARandomAlphabet() {
    const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabetNum = alphabets.split('');
    const randomIndex = Math.floor(Math.random() * alphabetNum.length);
    return alphabetNum[randomIndex];
    // console.log(randomIndex);

}