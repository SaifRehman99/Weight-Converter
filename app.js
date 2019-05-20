// getting the refrences here

// result to be printed
const resultDiv = document.querySelector('#results');
const gramsOutput = document.querySelector('#gramsOutput');
const kgOutput = document.querySelector('#kgOutput');
const ounceOutput = document.querySelector('#ounceOutput');
const poundOutput = document.querySelector('#poundOutput');

// getting the input values
const inputDivP = document.querySelector('#poundData');
const inputDivG = document.querySelector('#gmData');
const inputDivK = document.querySelector('#kgData');
const inputDivO = document.querySelector('#ounceData');

// select list here
const selectList = document.querySelector('#selectItem');

// gettinh the input div here
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

    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'

    // getting the input data
    let pndData = e.target.value;

    // printing the data
    poundOutput.innerHTML = `${pndData}`
    gramsOutput.innerHTML = `${pndData / 0.0022046}`;
    kgOutput.innerHTML = `${pndData / 2.2046}`;
    ounceOutput.innerHTML = `${pndData * 16}`;
})
inputDivG.addEventListener('input',(e)=>{

    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none';

    // getting the input data
    let gmData = e.target.value;

    gramsOutput.innerHTML = `${gmData}`
    poundOutput.innerHTML = `${gmData*0.0022046}`;
    kgOutput.innerHTML = `${gmData/1000}`;
    ounceOutput.innerHTML = `${gmData*0.035274}`


})
inputDivK.addEventListener('input',(e)=>{
   
    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'

    // getting the input data
    let kiloData = e.target.value;

    kgOutput.innerHTML = `${kiloData}`
    poundOutput.innerHTML = `${KiloData*2.2046}`;
    gramsOutput.innerHTML = `${kiloData/0.0010000}`;
    ounceOutput.innerHTML = `${kiloData*35.274}`
    
})
inputDivO.addEventListener('input',(e)=>{

    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'
    
    // getting the input data
    let OunceData = e.target.value;

    ounceOutput.innerHTML = `${OunceData}`
    poundOutput.innerHTML = `${OunceData*0.062500}`;
    gramsOutput.innerHTML = `${OunceData/0.035274}` 
    kgOutput.innerHTML = `${OunceData*35.274}`;


    
})
selectList.addEventListener('change', (e) => {
    if (e.target.value === 'g') {
        inputgram.style.display = 'flex'

    }
    else if (e.target.value === 'k') {
        inputkg.style.display = 'flex'


    }
    else if (e.target.value === 'o') {
        inputounce.style.display = 'flex'


    }
    else if (e.target.value === 'p') {
        inputPound.style.display = 'flex'
    }
    else {
        inputPound.style.display = 'flex'

    }

})