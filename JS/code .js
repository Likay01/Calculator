let output = document.getElementById("Display-bar");
let decimalStatus = true;
// appends button values to input field
function display(allSum) {
    output.value = output.value + allSum;
}

function displayMin(allSum) {
    output.value = output.value + allSum;
    decimalStatus = true;  
}
function displayMult(allSum) {
    output.value = output.value + allSum;
    
}
function displayDiv(allSum) {
    output.value = output.value + allSum;
    decimalStatus = true;
    
}
function displayPlus(allSum) {
    output.value = output.value + allSum;
    decimalStatus = true;
    
}

function displayComa(allSum) {
    if (decimalStatus === true) {
        output.value = output.value + allSum;
        decimalStatus = false;
    }
}
// evaluates calculate-able strings
function equal() {
    try {

        output.value = eval(output.value)
    }
    catch(err) {
        output.value = "error :("
    }
}

// to clear 
function clr() {
    output.value = "";
    output.value = output.value + allSum;
    decimalStatus = true;
}

