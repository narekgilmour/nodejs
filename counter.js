function counter() {
  var current = 0
  function localCounter() {
    return current++
  }
  localCounter.set = function (yourNumber) {
      current = yourNumber
    }
  localCounter.reset = function () {
      current = 1
    }
    return localCounter;
}


var counter = counter()

console.log(counter())
counter.set(5)
console.log(counter())
counter.reset()
console.log(counter())
