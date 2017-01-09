var range = function(a ,b ,c) {
  if ( c == null ) c=1
  var array = []
  if ( c > 0 ) {
  	for ( var i = a; i <= b ; i = i + c ) {
    	array.push(i)
  		}
    return array
  } else {
     		for ( var i = a; i >= b ; i = i +c ) {
       		array.push(i)
     		}
     return array
  }
}
var sum = function(array) {
  var sum1 = 0;
  for (var i = 0; i <array.length; i++) {
    sum1 = sum1 + array[i]
  }
  return sum1
}

console.log(range(1, 10))
// > [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// > [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// > 55
