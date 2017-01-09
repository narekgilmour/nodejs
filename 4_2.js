function reverseArray (array) {
  var n=array.length
    var swap
    for ( var i = 0; i <= n/2-n%2 ; i++ ) {
      swap = array[i]
      array[i] = array[n-i-1] 
      array[n-i-1] = swap
    }   	
  return array
}


function reverseArrayInPlace (array) {
  var n=array.length
    var swap
    for ( var i = 0; i <= n/2-n%2 ; i++ ) {
      swap = array[i]
      array[i] = array[n-i-1] 
      array[n-i-1] = swap
    }   	
}
console.log(reverseArray(["A", "B", "C"]));
// > ["C", "B", "A"];
var arrayValue = [1, 2, 3, 4, 5, 6 ,100];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// > [5, 4, 3, 2, 1]
