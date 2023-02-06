const currentNumOutput = document.querySelector('.current-num');
const previousNumOutput = document.querySelector('.previous-num');
const clearBtt = document.querySelector('.clear');
const allClearBtt = document.querySelector('.all-clear');
const numbers = document.querySelectorAll('.numero');
const operator = document.querySelectorAll('.operador');
const delBtt = document.querySelector('.del');
let calc = 0

class Calculadora {
  currentNumOutput
  previousNumOutput

  constructor(currentNumOutput, previousNumOutput){
    this.currentNumOutput = currentNumOutput;
    this.previousNumOutput = previousNumOutput;
  }

  appendNum(dig) {
    if(dig === '.' && currentNumOutput.textContent.includes('.')) {return}
    if(dig === '0' && currentNumOutput.textContent === '0') {return}
    if(dig !== '0' && dig !== '.' && currentNumOutput.textContent === '0') {currentNumOutput.textContent = ''}
    currentNumOutput.textContent += dig;
  }

  clear() {
    currentNumOutput.textContent = '0';
  }

  allClear() {
    previousNumOutput.textContent = '0';
    currentNumOutput.textContent = '0';
  }

  del() {
    if (currentNumOutput.textContent.length === 1) {return currentNumOutput.textContent = 0}
    currentNumOutput.textContent = currentNumOutput.textContent.slice(0, currentNumOutput.textContent.length -1)
  }

  calculate(elem) {
    let pNum = Number(previousNumOutput.textContent)
    let cNum = Number(currentNumOutput.textContent)
    switch (elem) {
      case '÷':
        calc = pNum / cNum      
        break
      case 'x':
        calc = pNum * cNum    
        break
      case '-':
        calc = pNum - cNum    
        break
      case '+':
        calc = pNum + cNum    
        break
    }
    previousNumOutput.textContent = calc;
    currentNumOutput.textContent = 0
  }
  
}

const calculadora = new Calculadora(currentNumOutput, previousNumOutput)

numbers.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    calculadora.appendNum(event.target.textContent)
  })
})

operator.forEach((elem) => {
  elem.addEventListener('click', (event) => {
    calculadora.calculate(event.target.textContent)
  })
})

allClearBtt.addEventListener('click', calculadora.allClear)
clearBtt.addEventListener('click', calculadora.clear)
delBtt.addEventListener('click', calculadora.del)