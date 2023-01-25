class Calculator {

  constructor(previousOperandTxtElement, currentOperandTxtElement) {
    this.previousOperandTxtElement = previousOperandTxtElement
    this.currentOperandTxtElement = currentOperandTxtElement
    this.clear()
  }

  clearAll() {

  }

  clear() {
    this.previousOperand = ''
    this.currentOperand = ''
    this.operation = undefined
  }

  del() {

  }

  appendNumber(number) {
    if (number === '.' && currentOperandTxtElement.innerText.includes('.')) return
    this.currentOperand = this.currentOperand.toString() + number.toString()
  }

  chooseOperation(operation) {
    if(this.currentOperand === '') return
    if(this.previousOperand !== '') {
      this.compute()
    }
    this.operation = operation
    this.previousOperand = this.currentOperand
    this.currentOperand = ''
  }

  compute() {
    
  }

  updateDisplay() {
    this.currentOperandTxtElement.innerText = this.currentOperand
    this.previousOperandTxtElement.innerText = this.previousOperand
  }

}

const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
const allClearButton = document.querySelector('[data-all-clear]')
const clearButton = document.querySelector('[data-clear]')
const deleteButton = document.querySelector('[data-delete]')
const equalsButton = document.querySelector('[data-equals]')
const previousOperandTxtElement = document.querySelector('[data-previous-operand]')
const currentOperandTxtElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperandTxtElement, currentOperandTxtElement)

numberButtons.forEach(btt => {
  btt.addEventListener('click', () => {
    calculator.appendNumber(btt.innerText)
    calculator.updateDisplay()
  })
})

operationButtons.forEach(btt => {
  btt.addEventListener('click', () => {
    calculator.chooseOperation(btt.innerText)
    calculator.updateDisplay()
  })
})