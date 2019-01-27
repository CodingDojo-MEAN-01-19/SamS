let mathlib = require('./mathlib')();     //notice the extra invocation parentheses! this is now exporting  a function that returns an object (or an 'object constructor')
// console.log(mathlib);
var x = mathlib.add(2, 10);
var y = mathlib.square(2);
var z = mathlib.multiply(2, 10);
var a = mathlib.random(10, 20);

// console.log(x, y, z);
console.log(a);