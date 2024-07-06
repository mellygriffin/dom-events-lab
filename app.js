/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

const numButton = document.querySelectorAll('.number');//all numbers
const operatorButton = document.querySelectorAll('.operator');//all operators
const equalButton = document.querySelectorAll('.equals');//equal button
const clearButton = document.querySelector('button[textContent="C"]');//clear button

/*-------------------------------- Variables --------------------------------*/
let num1 = null;//first number pressed
let num2 = null;//second number pressed
let op = null;//current operator
let result = null;//result of equation
let currentOperator = null;//current operator picked

/*------------------------ Cached Element References ------------------------*/
//classes: button number, row, display, button operator, button equals

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  const clickedButton = event.target;
  display.textContent = clickedButton.innerText;
  if (clickedButton.classList.contains('number')) { //number buttons
    if (currentOperator === null) {
      num1 = num1 === null ? clickedButton.innerText : num1 + clickedButton.innerText;
      display.textContent = num1;
    } else {
      num2 = num2 === null ? clickedButton.innerText : num2 + clickedButton.innerText;
      display.textContent = num2;
    }
  }
})
  if (clickedButton === equalButton) {
    if (num1 !== null && num2 !== null && currentOperator !== null) { //if two numbers have been selected WITH an operator
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      switch (currentOperator) {
        case '+':
          result = num1 + num2;
          break;
        case '-':
          result = num1 - num2;
          break;
        case '*':
          result = num1 * num2;
          break;
        case '/':
          result = num1 / num2;
          break;
      }
      display.textContent = result;
      num1 = result.toString(); //store result as num1
      num2 = null;
      currentOperator = null;
    }
    clearButton.addEventListener('click', (event) => {
      num1 = null;
      num2 = null;
      currentOperator = null;
      result = null;
      display.textContent = '0'; //return everything to zero
    });
  }

/*-------------------------------- Functions --------------------------------*/
//