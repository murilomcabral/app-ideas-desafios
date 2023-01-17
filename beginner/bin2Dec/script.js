const binInput= document.querySelector('.binInput')
const binOutput = document.querySelector('.binOutput')

binInput.addEventListener('input', function () {
  bin2dec()
})

function reverseBin(binNum) {
  const reversedBin = []
  for (let dig of binNum) {
    reversedBin.unshift(dig)
  }
  return reversedBin.join('')
}

function bin2dec() {
  const binNum = binInput.value
  let dec = 0
  const revBin = reverseBin(binNum)
  for (digit in revBin) {
    dec += revBin[digit]*2**digit
  }
  binOutput.textContent = `For Binary: ${binNum} ... Decimal is: ${dec}`
}