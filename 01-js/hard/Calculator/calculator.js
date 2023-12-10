/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
    this.result = 0;
  }

  set(num){
    this.result = num;
  }

  add(num) {
    this.result += num;
  }

  sub(num){
    this.result -= num;
  }

  mul(num){
    this.result *= num;
  }

  div(num){
    if(num === 0) {
      throw new Error('Cannot divide by zero');
    }this.result /= num;
  }

  clear(){
    this.result = 0;
  }

  getResult(){
    return this.result;
  }
}

let inputBox = document.getElementById('input');
let outputBox = document.getElementById('output');

let ACbtn = document.getElementById('AC');
let Backspacebtn = document.getElementById('Back-button');

let dividebtn = document.getElementById('div');
let multiplybtn = document.getElementById('mul');

let sevenbtn = document.getElementById('seven');
let eightbtn = document.getElementById('eight');
let ninebtn = document.getElementById('nine');

let subtractbtn = document.getElementById('sub');
let fourbtn = document.getElementById('four');
let fivebtn = document.getElementById('five');
let sixbtn = document.getElementById('six');

let addbtn = document.getElementById('add');
let onebtn = document.getElementById('one');
let twobtn = document.getElementById('two');
let threebtn = document.getElementById('three');
let equalsbtn = document.getElementById('equals');

let zerobtn = document.getElementById('zero');
let decimalbtn = document.getElementById('decimal');

let calculator = new Calculator();

ACbtn.addEventListener('click', () => {
  inputBox.value = '';
  outputBox.value = '';
});

Backspacebtn.addEventListener('click', () => {
  inputBox.value = inputBox.value.slice(0, -1);
});

dividebtn.addEventListener('click', () => {
  inputBox.value += '/';
});

multiplybtn.addEventListener('click', () => {
  inputBox.value += '*';
});

sevenbtn.addEventListener('click', () => {
  inputBox.value += '7';
});

eightbtn.addEventListener('click', () => {
  inputBox.value += '8';
});

ninebtn.addEventListener('click', () =>{
  inputBox.value += '9'
})

subtractbtn.addEventListener('click', () => {
  inputBox.value += '-';
})

fourbtn.addEventListener('click', () => {
  inputBox.value += '4';
});

fivebtn.addEventListener('click', () => {
  inputBox.value += '5';
});

sixbtn.addEventListener('click', () => {
  inputBox.value += '6';
});

addbtn.addEventListener('click', () => {
  inputBox.value += '+';
});

onebtn.addEventListener('click', () => {
  inputBox.value += '1';
});

twobtn.addEventListener('click', () => {
  inputBox.value += '2';
});

threebtn.addEventListener('click', () => {
  inputBox.value += '3';
});

equalsbtn.addEventListener('click', () => {
  try{
    result = eval(inputBox.value);
  }catch(err){
    outputBox.value = 'Invalid Input';
  }
  outputBox.value = String(result).slice(0, 10);
});

zerobtn.addEventListener('click', () => {
  inputBox.value += '0';
});

decimalbtn.addEventListener('click', () => {
  inputBox.value += '.';
});

























