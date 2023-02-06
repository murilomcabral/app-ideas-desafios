const currentNum = document.querySelector('.current-num');
const previousNum = document.querySelector('.previous-num');
const numbers = document.querySelectorAll('.numero');
const clearBtt = document.querySelector('.clear');
const allClearBtt = document.querySelector('.all-clear');

class Calculadora {
  currentNum
  previousNum

  constructor(currentNum, previousNum){
    this.currentNum = currentNum;
    this.previousNum = previousNum;
  }

  appendNum(dig) {
    if(dig === ',' && currentNum.textContent.includes(',')) {return}
    if(dig === '0' && currentNum.textContent === '0') {return}
    if(dig !== '0' && dig !== ',' && currentNum.textContent === '0') {currentNum.textContent = ''}
    currentNum.textContent += dig;
  }

  clear() {
    currentNum.textContent = '0';
  }

  allClear() {
    previousNum.textContent = '0';
    currentNum.textContent = '0';
  }
}

const calculadora = new Calculadora(currentNum, previousNum)

numbers.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    calculadora.appendNum(event.target.textContent)
  })
})

function calcPad(event) {
  console.log(event.key)
}

clearBtt.addEventListener('click', calculadora.clear)
allClearBtt.addEventListener('click', calculadora.allClear)
window.addEventListener('keydown', calcPad)
