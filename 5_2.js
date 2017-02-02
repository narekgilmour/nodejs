/* -- -- */

function average(array) {
  function plus (a, b) {
    return a+b
  }
  return array.reduce(plus) / array.length
}

var names = {}
ancestry.foreach( function ( x ) {
  names[ x.names ] = x
})

 var differences = ancestry.filter( function ( x ) {
   return names [ x.mother ] != null
 }).map( function ( x ) {
   return x.born - names[ x.mother ].born
 })

console.log(average(differences));
// → 31.2
