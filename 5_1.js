var arrays = [[1, 2, 3], [4, 5], [6]];

var result = arrays.reduce ( function ( array, a ) {
  return array.concat (a) 
} )
console.log (result) 

// → [1, 2, 3, 4, 5, 6]
