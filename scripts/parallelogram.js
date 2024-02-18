function calculateParallelogramaArea(){
    const base = getInputValueId('parallelogram-base');
    console.log('base value:',base);

    const height = getInputValueId('parallelogram-height');
    console.log('height value:', height);


    const area = base * height;
    console.log('area of the parallelogram is:', area);


    setInnerTextById('parallelogram-area', area);

}

function getInputValueId(inputFieldId){
    const inputField = document.getElementById(inputFieldId);
    const inputValuetext = inputField.value;
    const inputValue = parseFloat(inputValuetext);
    // console.log(inputField.value);
    return inputValue;
}


function setInnerTextById(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}