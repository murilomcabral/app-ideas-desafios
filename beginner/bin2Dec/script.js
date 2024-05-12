const binInput= document.querySelector('.binInput');
const binOutput = document.querySelector('.binOutput');
const binRegex = /[01]/gmi;
binInput.setAttribute('maxlength','19')

binInput.addEventListener('input', function () {
    const binNum = 
      binInput.value = binInput.value
      .replace(/[^01]/g,'')
      .replace(/([01]{4})/g, ' $1')
      .trim();
    bin2dec(binNum)
})

function reverseBin(binNum) {
  const reversedBin = []
  for (let dig of binNum) {
    reversedBin.unshift(dig)
  }
  return reversedBin.join('')
}

function bin2dec(binNum) {
  let dec = 0;
  const revBin = reverseBin(binNum)
  for (digit in revBin) {
    dec += revBin[digit]*2**digit
  }
  binOutput.textContent = `For Binary: ${binNum} ... Decimal is: ${dec}`
}