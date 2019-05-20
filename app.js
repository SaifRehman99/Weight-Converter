// getting the refrences here
const resultDiv = document.querySelector('#results');
const gramsOutput = document.querySelector('#gramsOutput');
const kgOutput = document.querySelector('#kgOutput');
const ounceOutput = document.querySelector('#ounceOutput');
const inputDivP = document.querySelector('#poundData');
const inputDivG = document.querySelector('#gmData');
const inputDivK = document.querySelector('#kgData');
const inputDivO = document.querySelector('#ounceData');
const selectList = document.querySelector('#selectItem');
const inputPound = document.querySelector('#pound');
const inputgram = document.querySelector('#gram');
const inputkg = document.querySelector('#kilo');
const inputounce = document.querySelector('#ounce');

// hiding the input fields
inputPound.style.display = 'none'
inputgram.style.display = 'none'
inputkg.style.display = 'none'
inputounce.style.display = 'none'


// setting the card div none
resultDiv.style.display = 'none'

// adding the event listener
inputDivP.addEventListener('input', (e) => {
    console.log(e.target.value)


    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'

    // getting the input data
    let poundData = e.target.value;
    gramsOutput.innerHTML = `${poundData / 0.0022046}`;
    kgOutput.innerHTML = `${poundData / 2.2046}`;
    ounceOutput.innerHTML = `${poundData * 16}`;
})
inputDivG.addEventListener('input',(e)=>{
    console.log(e.target.value)

})
inputDivK.addEventListener('input',(e)=>{
   
    console.log(e.target.value)
    
})
inputDivO.addEventListener('input',(e)=>{
    console.log(e.target.value)

    
})
selectList.addEventListener('change', (e) => {
    if (e.target.value === 'gram') {
        inputgram.style.display = 'flex'

    }
    else if (e.target.value === 'kg') {
        inputkg.style.display = 'flex'


    }
    else if (e.target.value === 'ounce') {
        inputounce.style.display = 'flex'


    }
    else if (e.target.value === 'pound') {
        inputPound.style.display = 'flex'
    }
    else {
        inputPound.style.display = 'flex'

    }

})