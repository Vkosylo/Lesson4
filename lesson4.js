const prompt = require("prompt-sync")()
let lengthArray = parseInt(prompt("Enter length array: "))
let initialNumber = parseInt(prompt("Enter number from start: "))

const arr = []

if (isNaN(lengthArray) || isNaN(initialNumber)) {
    for (let i = initialNumber; i < initialNumber + lengthArray; i++){
        if (isPrime(i)) {
            arr.push(i)
        }
        i++
    }
    return
}

console.log('Resulet:', arr)

function isPrime(num) {
  if (num <= 1) return false
  if (num <= 3) return true

  if (num % 2 === 0 || num % 3 === 0) return false

  for (let n = 5; n * n <= num; n += 6) {
    if (num % n === 0 || num % (n + 2) === 0) return false
  }
  return true
}
