
//var functiondetector = require('./functiondetector.js')
//functiondetector(add().)

function counter() {
  var current = 0
  function counter() {
    return current++
  }
  counter.set = function (yourNumber) {
      current = yourNumber
    }
  counter.reset = function () {
      current = 1
    }
    return counter;
}


var counter = counter()

console.log(counter())
console.log(counter.set(5))
console.log(counter())