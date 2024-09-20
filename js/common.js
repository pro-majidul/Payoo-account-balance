
// get value by input text

function getInputTextValueById(id){
    const values = document.getElementById(id).value ;
    const valueNumber = parseFloat(values);
    return valueNumber;
}

// get value by innerText
function getTextById(id){
    const textValues = document.getElementById(id).innerText ;
    const valueNumber = parseFloat(textValues);
    return valueNumber;
}