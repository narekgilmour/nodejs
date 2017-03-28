function logFive (seq) {
  for (var i = 0; i < 5; i++) {
      if (!seq.next())
        break
      console.log( seq.current() );
  }
}
/* constructor_of_RangeSeq */
function RangeSeq (from, to) {
  this.pos = from
  this.to = to
}
/* RangeSeq_next */
RangeSeq.prototype.next = function () {
  if (this.pos >= this.to)
      return false
  this.pos++
  return true
}
/* RangeSeq_current */
RangeSeq.prototype.current = function () {
  return this.pos
}
/* constructor_of_ArraySeq */
function ArraySeq (arr) {
  this.pos = -1
  this.array = arr
}
/* ArraySeq_next */
ArraySeq.prototype.next = function () {
  if (this.pos >= this.array.length -1)
  return false
  this.pos++
  return true
}
/* ArraySeq_current */
ArraySeq.prototype.current = function () {
  return this.array[this.pos]
}

logFive(new ArraySeq([1, 2]));
// → 1
// → 2
logFive(new RangeSeq(100, 1000));
// → 100
// → 101
// → 102
// → 103
// → 104
