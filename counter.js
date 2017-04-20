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
counter.set(5)
console.log(counter())
counter.reset()
console.log(counter())
