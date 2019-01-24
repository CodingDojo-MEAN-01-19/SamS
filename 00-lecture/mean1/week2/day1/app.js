// //callbacks
// //Example 1
// //here i am doing the same thing twice. instead, we can use a callback
const array = [10,20,30,40,50];

// function addArray(a) {
//   const results = [];

//   for (let i = 0; i < a.length; i++){
//     console.log('index', i, a[i])
//     const currentNum = a[i];
//     const value = currentNum + 1;
//     console.log('next value', currentNum + 1)
//     results.push(value);
//   }
//   return results;
// }
// console.log(addArray(array));

// function toString(a) {
//   const results = []

//   for (let i = 0; i < a.length; i++){
//     const value = a[i]
//     const string = `value at ${i} is ${value}`;
//     results.push(string)
//   }
//   return results;
// }
// console.log(toString(array))
////////////////////////////////////////////////////////////////
//Example 2
//callback is also sometimes refered to as cd, but really can be called anything because takes a function
// function map(array, callback) {
//   console.log(array, callback);
// }
// map(array, function(){} ) //the callback just takes in an anon function

//Example 2.1
// function map(a, callback) {
//   console.log(a, callback);
//   const results = [];

//   for (let i = 0; i < a.length; i++) {
//     const value = a[i];
//     //invoke callback function, passing in value
//     results.push(callback(value));
//   }
//   return results;
// }
// map(array, function(v){//value with is being passed on line 47
//   console.log('nothing special', v + 1)
//   //in order to get back the value of v, need to return it
//   return v + 1 ;
// });

//Example 2.2
const a = [10,20,30,40,50];
function map(a, callback) {
  // console.log(a, callback);
  const results = [];

  for (let i = 0; i < a.length; i++) {
    const value = a[i];
    //invoke callback function, passing in value, i, a
    results.push(callback(value, i, a));//index (i) and array (a) aren't needed, they are just the standard for map
  }
  return results;
}
//function below IS callback
map(a, function(value, i, a){//here we need to accept the value, index, and array (v, i, and a)
  // console.log('to string', value, i)
  //in order to get back the value of v, need to return it
  return `value at ${i} is ${value}`; 
});

////////////////
const a = [10,20,30,40,50];
function map(a, callback) {
  const results = [];
  for (let i = 0; i < a.length; i++){
    const value = a[i];
    var x = callback(value);
    results.push(x);
  }
  return results;
}

//@25 minutes


















//helper function
function add(num1, num2) {
  return num1 + num2;
}


