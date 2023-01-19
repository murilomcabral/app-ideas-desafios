const binInput= document.querySelector('.binInput');
const binOutput = document.querySelector('.binOutput');
const binRegex = /[01]/gmi;

binInput.addEventListener('input', function (e) {
  if(binInput.value.match(binRegex)) {
    bin2dec()
  }
})

function reverseBin(binNum) {
  const reversedBin = []
  for (let dig of binNum) {
    reversedBin.unshift(dig)
  }
  return reversedBin.join('')
}

function bin2dec() {
  const binNum = binInput.value = binInput.value.match(binRegex).join('')
  let dec = 0
  const revBin = reverseBin(binNum)
  for (digit in revBin) {
    dec += revBin[digit]*2**digit
  }
  binOutput.textContent = `For Binary: ${binNum} ... Decimal is: ${dec}`
}