let output = document.getElementById("Display-bar");


// appends button values to input field
function display(anyVal) {
    output.value = output.value + anyVal;
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



