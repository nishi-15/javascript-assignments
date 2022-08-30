let answer = 0;

function addition() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if(!first_operand || !second_operand) throw "Please Enter the Values in both fields"
        // Used number type safety check
        if(Number.isSafeInteger(parseFloat(first_operand)) && Number.isSafeInteger(parseFloat(second_operand))){
            answer = parseInt(first_operand) + parseInt(second_operand);
            answer_fn();
        }
        else{
            throw "Please enter valid integer value" //Throw exception for invalid integer value
        }
    }
    catch(e) {
        document.getElementById("answer").innerText = `Error: ${e} .`; //used template literals
        document.getElementById("answer").style.color = "red";
    }
}

function subtraction() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if(!first_operand || !second_operand) throw "Please Enter the Values in both fields"
        // Used number type safety check
        if(Number.isSafeInteger(parseFloat(first_operand)) && Number.isSafeInteger(parseFloat(second_operand))){
            answer = parseInt(first_operand) - parseInt(second_operand);
            answer_fn();
        }
        else{
            throw "Please enter valid integer value" //Throw exception for invalid integer value
        }
    }
    catch(e) {
        document.getElementById("answer").innerText = `Error: ${e} .`; //used template literals
        document.getElementById("answer").style.color = "red";
    }
}

function multiplication() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if(!first_operand || !second_operand) throw "Please Enter the Values in both fields"
        // Used number type safety check
        if(Number.isSafeInteger(parseFloat(first_operand)) && Number.isSafeInteger(parseFloat(second_operand))){
            answer = parseInt(first_operand) * parseInt(second_operand);
            answer_fn();
        }
        else{
            throw "Please enter valid integer value" //Throw exception for invalid integer value
        }
    }
    catch(e) {
        document.getElementById("answer").innerText = `Error: ${e} .`; //used template literals
        document.getElementById("answer").style.color = "red";
    }
}

function divison() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try {
        // Throw exception if any input field is empty
        if(!first_operand || !second_operand) throw "Please Enter the Values in both fields"
        // Used number type safety check
        if(Number.isSafeInteger(parseFloat(first_operand)) && Number.isSafeInteger(parseFloat(second_operand))){
            // Throw exception if we try to divide value by zero
            if(parseInt(second_operand) === 0) throw "Cannot divide by zero"
            answer = parseInt(first_operand) / parseInt(second_operand);
            answer_fn();
        }
        else{
            throw "Please enter valid integer value" //Throw exception for invalid integer value
        }
    }
    catch (e) {
        document.getElementById("answer").innerText = `Error: ${e} .`; //used template literals
        document.getElementById("answer").style.color = "red";
    }
}

function modulus() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if(!first_operand || !second_operand) throw "Please Enter the Values in both fields"
        // Used number type safety check
        if(Number.isSafeInteger(parseFloat(first_operand)) && Number.isSafeInteger(parseFloat(second_operand))){
            // Throw exception if we try to divide value by zero
            if(parseInt(second_operand) === 0) throw "Cannot divide by zero"
            answer = parseInt(first_operand) % parseInt(second_operand);
            answer_fn();
        }
        else{
            throw "Please enter valid integer value" //Throw exception for invalid integer value
        }
    }
    catch(e) {
        document.getElementById("answer").innerText = `Error: ${e} .`; //used template literals
        document.getElementById("answer").style.color = "red";
    }
}

function clean() {
    document.getElementById("first_operand").value = '';
    document.getElementById("second_operand").value = '';
    document.getElementById("answer").innerText = '';
}

function answer_fn() {
    document.getElementById("answer").innerText = `Answer is: ${answer}`; //used template literals
    document.getElementById("answer").style.color = "black";
}