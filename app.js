/*-------------------------------- Constants --------------------------------*/
const calculator = document.querySelector('#calculator');
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/
//classes: button number, row, display, button operator, button equals
/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  display.textContent = event.target.innerText;

  // console.log(event.target.innerText); //How to store each click on the display line?

if(event.target.classList.contains('number')) {

  console.log(convertNumber);
  // console.dir(event.target.value);
  //Do something with a number, convert string to number
}

if(event.target.innerText === '*' || '+' || '-' || '=' || '/') {

  // console.dir(event.target.value);//Do something with this operator, convert string
}

if(event.target.innerText === 'C') {

  // console.dir(event.target.value);//Do something with this operator, convert string
}

});


/*-------------------------------- Functions --------------------------------*/



const add = () => {}
const sub = () => {}
const mult = () => {}
const divide = () => {}