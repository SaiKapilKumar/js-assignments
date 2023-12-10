// Status: Complete

class Calculator {
  constructor(inputBox, outputBox) {
    this.inputBox = inputBox;
    this.outputBox = outputBox;
    this.expression = '';
  }

  clear() {
    this.inputBox.value = '';
    this.outputBox.value = '';
    this.expression = '';
  }

  delete() {
    this.expression = this.expression.slice(0, -1);
    this.inputBox.value = this.expression;
  }

  appendValue(value) {
    this.expression += value;
    this.inputBox.value = this.expression;
  }

  calculate() {
    try {
      const result = this.evaluateExpression();
      if (isNaN(result) || result === Infinity || result === -Infinity) {
        throw 'Invalid Input';
      }
      this.outputBox.value = String(result).slice(0, 10);
    } catch (err) {
      this.outputBox.value = 'Invalid Input';
    }
  }

  evaluateExpression() {
    const operators = ['*', '/', '+', '-'];
    const nums = this.expression.split(/[-+*/]/).map(parseFloat);
    const ops = this.expression.split('').filter(char => operators.includes(char));

    let result = nums[0];

    for (let i = 0; i < ops.length; i++) {
      const operator = ops[i];
      const num = nums[i + 1];

      if (operator === '+') {
        result += num;
      } else if (operator === '-') {
        result -= num;
      } else if (operator === '*') {
        result *= num;
      } else if (operator === '/') {
        if (num === 0) throw 'Cannot divide by zero';
        result /= num;
      }
    }

    return result;
  }
}



let inputBox = document.getElementById('input');
let outputBox = document.getElementById('output');

const calcultor = new Calculator(inputBox, outputBox);

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
  calcultor.clear();
});

Backspacebtn.addEventListener('click', () => {
  calcultor.delete();
});

dividebtn.addEventListener('click', () => {
  calcultor.appendValue('/');
});

multiplybtn.addEventListener('click', () => {
  calcultor.appendValue('*');
});

sevenbtn.addEventListener('click', () => {
  calcultor.appendValue('7');
});

eightbtn.addEventListener('click', () => {
  calcultor.appendValue('8');
});

ninebtn.addEventListener('click', () =>{
  calcultor.appendValue('9');
})

subtractbtn.addEventListener('click', () => {
  calcultor.appendValue('-');
})

fourbtn.addEventListener('click', () => {
  calcultor.appendValue('4');
});

fivebtn.addEventListener('click', () => {
  calcultor.appendValue('5');
});

sixbtn.addEventListener('click', () => {
  calcultor.appendValue('6');
});

addbtn.addEventListener('click', () => {
  calcultor.appendValue('+');
});

onebtn.addEventListener('click', () => {
  calcultor.appendValue('1');
});

twobtn.addEventListener('click', () => {
  calcultor.appendValue('2');
});

threebtn.addEventListener('click', () => {
  calcultor.appendValue('3');
});

equalsbtn.addEventListener('click', () => {
  calcultor.calculate();
});

zerobtn.addEventListener('click', () => {
  calcultor.appendValue('0');
});

decimalbtn.addEventListener('click', () => {
  calcultor.appendValue('.');
});

























