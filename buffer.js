function makebuffer() {
  var string = ''

  function buffer(value) {
    if(arguments.length == 0) {
      return string
    }
    string += value
  }

  buffer.reset = function() {
    string = ''
  } 
  return buffer
}

var buffer = makebuffer()

buffer('mask')
console.log(buffer())
buffer.reset()
console.log(buffer())
