// Your code here.
function arrayToList ( array ) {
  var list=null , n = array.length
  for ( var i = n-1; i >= 0; i--) {
   list =  { value:array [ i ], rest: list }
  }
  return list
}

function listToArray ( list ) {
  var array = [], i = 0
  while ( list.rest != null ) {
    array [i] = list.value
    i++
    list = list.rest
  }
  return array
}

function prepend ( number, list ) {
  return { value : number, rest: list}
}

function nth ( list, number ) {
  if ( number == 0 ) {
    return list.value
  } else {
      return nth ( list.rest, number - 1 )
    }
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30, 40])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// → 20
