/*let input= document.getElementById("input-box");
let buttons = document.querySelectorAll("button");

let string ="";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e) =>{
        if(e.target.innerHTML == '=')
        {
            string = eval(string);
            input.value = string;
        }
    })

}


)
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }
        string += e.target.innerHTML;
        input.value = string;

    })
})*/
document.addEventListener('DOMContentLoaded', function () {
    // Select the input box
    const inputBox = document.getElementById('inputbox');

    // Select all calculator buttons
    const buttons = document.querySelectorAll('.calculator button');

    // Add click event listener to each button
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            handleButtonClick(button.innerText);
        });
    });

    // Function to handle button click
    function handleButtonClick(value) {
        switch (value) {
            case '=':
                performCalculation();
                break;
            case 'AC':
                clearInput();
                break;
            case 'DEL':
                deleteLastCharacter();
                break;
            default:
                appendToInput(value);
        }
    }

    // Function to append value to the input box
    function appendToInput(value) {
        inputBox.value += value;
    }

    // Function to clear the input box
    function clearInput() {
        inputBox.value = '';
    }

    // Function to delete the last character from the input box
    function deleteLastCharacter() {
        inputBox.value = inputBox.value.slice(0, -1);
    }

    // Function to perform the calculation
    function performCalculation() {
        try {
            // Use eval to evaluate the mathematical expression
            inputBox.value = eval(inputBox.value);
        } catch (error) {
            // Handle errors, e.g., division by zero
            inputBox.value = 'Error';
        }
    }
});

