const bin = "1101001"

function reverse() {
  const reversedBin = []
  for (let dig of bin) {
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
  console.log(`For Binary: ${bin} ... Decimal is: ${dec}`)
}

bin2dec()