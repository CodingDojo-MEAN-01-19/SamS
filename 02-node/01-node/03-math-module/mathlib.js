module.exports = function (){
  return {
    add: function(num1, num2) { 
         return num1 + num2;
    },
    multiply: function(num1, num2) {
         return num1 * num2;
    },
    square: function(num) {
         return num * num;
    },
    random: function(num1, num2) {
      min = Math.ceil(num1);
      max = Math.floor(num2);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  }
};

// * Returns a random integer between min (inclusive) and max (inclusive).
// * The value is no lower than min (or the next integer greater than min
// * if min isn't an integer) and no greater than max (or the next integer
// * lower than max if max isn't an integer).
// * Using Math.round() will give you a non-uniform distribution!