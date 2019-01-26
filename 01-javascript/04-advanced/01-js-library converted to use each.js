//for more practice, convert other functions to use each from the original 01-js-library.js file

function each(array, callback) {
  // loop through the array
  for(let i = 0; i < array.length; i++) {
  // invoke call back (because it is a function) for each item in the array
    callback(array[i], i); // passing the current index <i> is optional here (arr[i] is not) because receiving function doesnt necessarily need to accept it. should always accept as best practice.
  }
}

const stringArray = ['1', 'cat', '2', '3', '4', '5', '6', '7', '8', 'dog'];
each(stringArray, function(element, index){ //this is callback with an anonymous function. here, element is accepts the array item arr[i], and index is accepting i
  // console.log(`element: ${element} and index ${index}`)
});

each(stringArray, listItem);

function listItem(item) { //this is a callback with a named function. both of these (anonymous and named) are objects
  // console.log(item)
}



function map2(array, callback) { //map 'maps' anything
     const results = [];
//pass in array from line 47
    each(array, function(element, i) {//function here is the callback //element here is arr[i]
      
      const result = callback(element, i)//this is function from ~line 61
      results.push(result);

    }) 

    //  for(let i = 0; i < array.length; i++) {
    //    results.push(callback(array[i], i));  //pass parent element and index, and push them to results
    //  }

     return results;
   }
   let results1 = map2(stringArray, function(element, i){
     return parseInt(element, 10)//parseInt will give us back an integer
   }); //convert stringArray into numbers

console.log(results1);

//for more practice, convert other functions to use each.










///////////////////////////////////////////////////

// function filter(array, callback) {
//   const results  = [];
//   for(let i = 0; i < array.length; i++) {//here we need to use a conditional because we are filtering
//     if (callback(array[i], i)){
//       results.push(array[i]);

//     } 
//   }
//   return results;
// }

// results = filter(results, function(element){
//   return element % 2 === 0; //only returning even elements
// });


///////////////////////////////////////////////////

// function reject(array, callback) {
//   const results  = [];
//   for(let i = 0; i < array.length; i++) {//here we need to use a conditional because we are filtering/rejecting
//     if (!callback(array[i], i)){ //this does the exact opposite of filter, so simply negate! (!callback instead of callback)
//       results.push(array[i]);

//     } 
//   }
//   return results;
// }

// results = reject(results, function(element){ //do we want to reject (element)?
//   return isNaN(element); //the answer is: is it not a number? (isNaN)? if element is true (NAN) then we will reject! if its false, we will accept.
// }); 
// // console.log(results);

// //////////////////////////////////////////

// function find(array, callback) {
//   // const results  = []; dont need results array because if find 'finds' an item, it just returns it.
//   for(let i = 0; i < array.length; i++) {//here we need to use a conditional because we are filtering
//     if (!callback(array[i], i)){ //we need a conditional here, the conditional being whatever the result of callback is
//       return array[i]; //if it finds it, just return index of array (the current element)
//     } 
//   }
// }
// // console.log
// (find(results, function(element){
//   return element === 4; //we are lookng for 4 here
// }));

// function reduce(array, callback, memo) { //reduce sums all the numbers in the array
//   const results  = [].concat(array); //[].concat(array);  is making a copy of the arrays. memo is an optional param so it is undefined, so we have to give it starting info. memo is going to store all upcoming data (and whatever data we have so far)
//   if (memo === undefined) {
//     memo = results.pop(); //pop is destructive, so we made an array that is a copy (so we can destroy)
//   }
//   for(let i = 0; i < array.length; i++) {
//     memo = callback(memo, array[i], i); //pass in memo first, which is the accumulation of everything result is so far. then current value, then, optionally, we accept the index.
//   }
//   return memo;
// }


// results = reduce(results, add);
// function add(num1, num2, num3){
//   return num1 + num2 + num3
// }
// // console.log(results);





// // var _ = {
//   //map takes in an array of information and tranforms it based on what the operation of call back is. 
// //   map: function() {
// //     //code here;
// //   },
// //   reduce: functioncopy() { 
// //     // code here;
// //   },
// //   find: function() {   
// //     // code here;
// //   },
// //   filter: function() { 
// //     // code here;
// //   },
// //   reject: function() { 
// //     // code here;
// //   }
// // }
// // you just created a library with 5 methods!