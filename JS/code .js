let output = document.getElementById("Display-bar");
let allowComa = true;


// appends button values to input field
function display(anyVal) {
    output.value = output.value + anyVal;
}

function displayMin(anyVal) {
    output.value = output.value + anyVal;
    allowComa = true;
    
}
function displayMult(anyVal) {
    output.value = output.value + anyVal;
    allowComa = true;
    
}
function displayDiv(anyVal) {
    output.value = output.value + anyVal;
    allowComa = true;
    
}
function displayPlus(anyVal) {
    output.value = output.value + anyVal;
    allowComa = true;
    
}

function displayComa(anyVal) {
    if (allowComa === true) {
        output.value = output.value + anyVal;
        allowComa = false;
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
}


