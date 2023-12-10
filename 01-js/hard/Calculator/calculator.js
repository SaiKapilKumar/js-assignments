// Status: Complete

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

























