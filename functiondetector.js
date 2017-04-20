var isFunction = function (function4test) {
    var regfunction = /\s*function\s+\w*\s*\(\s*\w+\s*\,\s*\w+\s*\)\s*\{\s*return\s*.*\s*\}/
   return console.log(regfunction.test(`${function4test}`))
}
module.exports = isFunction
