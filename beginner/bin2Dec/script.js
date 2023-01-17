const binNum = '10101'

function reverse() {
  const reversedBin = []
  for (let dig of binNum) {
    reversedBin.unshift(dig)
  }
  return reversedBin.join('')
}

function bin2dec() {
  let dec = 0
  const revBin = reverse()
  for (digit in revBin) {
    dec += revBin[digit]*2**digit
  }
  console.log(`For Binary: ${binNum} ... Decimal is: ${dec}`)
}

bin2dec()