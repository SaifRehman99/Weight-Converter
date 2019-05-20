// getting the refrences here
const resultDiv = document.querySelector('#results');
const gramsOutput = document.querySelector('#gramsOutput');
const kgOutput = document.querySelector('#kgOutput');
const ounceOutput = document.querySelector('#ounceOutput');
const inputDiv = document.querySelector('#poundData');

// setting the card div none
resultDiv.style.display = 'none'

// adding the event listener
inputDiv.addEventListener('input', (e) => {


    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'

    // getting the input data
    let poundData = e.target.value;
    gramsOutput.innerHTML = `${poundData / 0.0022046}`;
    kgOutput.innerHTML = `${poundData / 2.2046}`;
    ounceOutput.innerHTML = `${poundData * 16}`;
})