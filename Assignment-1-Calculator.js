let answer = 0;
function addition() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if((first_operand === "") || (second_operand === "")) throw "Please Enter the Values both fields"
        answer = parseFloat(first_operand) + parseFloat(second_operand);
        answer_fn();
    }
    catch(e) {
        document.getElementById("answer").innerText = "Error:" + e + ".";
        document.getElementById("answer").style.color = "red";
    }
}

function subtraction() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if((first_operand === "") || (second_operand === "")) throw "Please Enter the Values both fields"
        answer = parseFloat(first_operand) - parseFloat(second_operand);
        answer_fn();
    }
    catch(e) {
        document.getElementById("answer").innerText = "Error:" + e + ".";
        document.getElementById("answer").style.color = "red";
    }
}

function multiplication() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if((first_operand === "") || (second_operand === "")) throw "Please Enter the Values both fields"
        answer = parseFloat(first_operand) * parseFloat(second_operand);
        answer_fn();
    }
    catch(e) {
        document.getElementById("answer").innerText = "Error:" + e + ".";
        document.getElementById("answer").style.color = "red";
    }
}

function divison() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try {
        // Throw exception if any input field is empty
        if((first_operand === "") || (second_operand === "")) throw "Please Enter the Values both fields"
        // Throw exception if we try to divide value by zero
        if(parseFloat(second_operand) === 0) throw "Can not be divided by 0"
        answer = parseFloat(first_operand) / parseFloat(second_operand);
        answer_fn();
    }
    catch (e) {
        document.getElementById("answer").innerText = "Error:" + e + ".";
        document.getElementById("answer").style.color = "red";
    }
}

function modulus() {
    let first_operand = document.getElementById('first_operand').value;
    let second_operand = document.getElementById('second_operand').value;
    try{
        // Throw exception if any input field is empty
        if((first_operand === "") || (second_operand === "")) throw "Please Enter the Values both fields"
        // Throw exception if we try to divide value by zero
        if(parseFloat(second_operand) === 0) throw "Can not be modulus by 0"
        answer = parseFloat(first_operand) % parseFloat(second_operand);
        answer_fn();
    }
    catch(e) {
        document.getElementById("answer").innerText = "Error:" + e + ".";
        document.getElementById("answer").style.color = "red";
    }
}

function clean() {
    document.getElementById("first_operand").value = '';
    document.getElementById("second_operand").value = '';
    document.getElementById("answer").innerText = '';
}

function answer_fn() {
    document.getElementById("answer").innerText = "Answer is:" + answer;
    document.getElementById("answer").style.color = "black";
}


function printName() {
    name = "Mary";
    name = "John";
    console.log(name);
  }