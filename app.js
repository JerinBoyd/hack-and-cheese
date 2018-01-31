// SOP create variables at top
const button = document.querySelector('#generateBtn');
const firstNameEl = document.querySelector('#first');
const lastNameEl = document.querySelector('#last');
const lastNames = [
    'cheddar',
    'gorgonzola',
    'havarti',
    'Face',
];
    
const firstNames = [
    'neo',
    'morpheus',
    'trinity',
    'Jerk',
];
// add your event listeners 
button.addEventListener('click', generateName);


//add functions
function generateName(e){
    const rndLastName = randomChoice(lastNames);
    const rndFirstName = randomChoice(firstNames);
    firstNameEl.textContent = rndFirstName;
    lastNameEl.textContent = rndLastName;
}

function randomChoice(array) {
    const rndIndex = Math.floor(Math.random() * array.length);
    return array[rndIndex];
}