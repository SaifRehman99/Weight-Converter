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
    let poundData = e.target.value;

    // printing the data
    poundOutput.innerHTML = `${poundData}`
    gramsOutput.innerHTML = `${poundData / 0.0022046}`;
    kgOutput.innerHTML = `${poundData / 2.2046}`;
    ounceOutput.innerHTML = `${poundData * 16}`;
})
inputDivG.addEventListener('input',(e)=>{

    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none';

    // getting the input data
    let gramData = e.target.value;

    gramsOutput.innerHTML = `${gramData}`
    poundOutput.innerHTML = `${gramData*0.0022046}`;
    kgOutput.innerHTML = `${gramData/1000}`;
    ounceOutput.innerHTML = `${gramData*0.035274}`


})
inputDivK.addEventListener('input',(e)=>{
   
    e.target.value ? resultDiv.style.display = 'block' : resultDiv.style.display = 'none'

    // getting the input data
    let KgData = e.target.value;

    kgOutput.innerHTML = `${kgData}`
    poundOutput.innerHTML = `${KgData*2.2046}`;
    gramsOutput.innerHTML = `${kgData/0.0010000}`;
    ounceOutput.innerHTML = `${kgData*35.274}`
    
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