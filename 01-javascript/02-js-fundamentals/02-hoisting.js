// 1
// console.log(hello);                                   
// var hello = 'world';
// AFTER HOISTING BY THE INTERPRETER
// var hello;
// console.log(hello);  //logs as undefined
// hello = "world"
//prediction: logs undefined
// correct


// 2
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// AFTER HOISTING BY THE INTERPRETER
// var needle = 'haystack';
// function test(){ 
// 	var needle = 'magnet';
// 	console.log(needle); 
// }
// test(); logs 'magnet' from local scope var needle
//prediction: logs magnet
// correct

// 3
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
// AFTER HOISTING BY THE INTERPRETER
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay'; 
// 	console.log(brendan);
// }
// console.log(brendan); //console logs 'super cool'
//prediction: console logs 'super cool'
//correct

// 4
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
// AFTER HOISTING BY THE INTERPRETER
// var food = 'chicken';
// function eat(){//hoisted function
//   var food; //hoisted
// 	var food = 'gone'; //hoisted
// 	food = 'half-chicken';
// 	console.log(food);

// }
// console.log(food); //logs "chicken" "half-chicken"
// eat();
//prediction: logs "chicken"
//corect


// 5
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// AFTER HOISTING BY THE INTERPRETER
// var mean; 
// console.log(food);
// var mean = function() {
//   var food; hoisted
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
// prediction: undefined, undefined, undefined
// acutal: mean is not a function (i incorrectly prediected undefined)

// 6
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
// <div id="copy-toolbar-container" style="cursor: pointer; position: absolute; top: 5px; right: 5px; padding: 0px 3px; background: rgba(224, 224, 224, 0.2); box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 0px 0px; color: rgb(187, 187, 187); border-radius: 0.5em; font-size: 0.8em;"><span id="copy-toolbar">copy</span></div>
// AFTER HOISTING BY THE INTERPRETER
// 6
// var genre; //hoisted
// function rewind() { //hoisted
//   var genre;
//   genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre); //error
// var genre = "disco";
// rewind(); 
// console.log(genre);
// //prediction: logs undefined as it console logs genre, logs "rock", "r&b", 'disco'
// //correct

// 7
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
// // AFTER HOISTING BY THE INTERPRETER

// function learn() { //hoisted
//   var dojo; //hoisted
//   dojo = "seattle"; 
// 	console.log(dojo); //logs 'seattle'
// 	var dojo = "burbank"; 
// 	console.log(dojo); //logs 'burbank'
// }
// dojo = "san jose"; //logs error WRONG 
// console.log(dojo); //logs undefined WRONG logs san jose
// learn(); //WRONG logs seattle, burbank,
// console.log(dojo);//logs burbank // WRONG logs san jose

// prediction: logs error, underfined, seattle, burbank, burbank //WRONG


// 8 - Bonus ES6: const
// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));
// function makeDojo(name, students){
//         const dojo = {};
//         dojo.name = name;
//         dojo.students = students;
//         if(dojo.students > 50){
//             dojo.hiring = true;
//         }
//         else if(dojo.students <= 0){
//             dojo = "closed for now";
//         }
//         return dojo;
// }
// AFTER HOISTING BY THE INTERPRETER
// function makeDojo(name, students){ //hoisted
//   const dojo = {};
//   dojo.name = name; 
//   dojo.students = students;
//   if(dojo.students > 50){
//       dojo.hiring = true;
//   }
//   else if(dojo.students <= 0){
//       dojo = "closed for now";
//   }
//   return dojo;

// console.log(makeDojo("Chicago", 65));
// console.log(makeDojo("Berkeley", 0));

// }
// //prediction: Logs object, and an error
// {
//   name: "Chicago",
//   students: 65,
//   hiring: true,
// }
// error
//correct! :D
