/* constructor */
function Vector ( x_cord, y_cord ) {
 this.x = x_cord
  this.y = y_cord
}

/* prototype_plus */
Vector.prototype.plus = function ( other ) {
return new Vector( this.x + other.x, this.y + other.y )
};

/* prototype_minus */
Vector.prototype.minus = function ( other ) {
return new Vector( this.x - other.x, this.y - other.y)
};

/* length_getter */
Vector.prototype.length = function ( x, y ) {
return math.sqrt( this.x * this.x + this.y * this.y)
};

Object.defineProperty( Vector.prototype, "length", {
  get: function() {
    return Math.sqrt( this.x * this.x + this.y * this.y )
  }
})

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// → Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// → Vector{x: -1, y: -1}
console.log(new Vector(3, 4).length);
// → 5
