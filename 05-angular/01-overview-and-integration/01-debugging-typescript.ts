// 1. Setting types
// var myString: string;
// // I can assign myString like this:
// myString = "Bee stinger";
// // Why is there a problem with this? What can I do to fix this?
// myString = 9;

//or change type to any
var myString: string;
// I can assign myString like this:
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
myString = "Nine";

// 2. Setting the types for function parameters
// function sayHello(name: string){
//    return `Hello, ${name}!`;
// }
// // This is working great:
// console.log(sayHello("Kermit"));
// // Why isn't this working? I want it to return "Hello, 9!"
// console.log(sayHello(9));

//change type to any
function sayHello(name: any){
  return `Hello, ${name}!`;
}
// This is working great:
// console.log(sayHello("Kermit"));
// Why isn't this working? I want it to return "Hello, 9!"
console.log(sayHello(9));

// 3. Optional parameters
// function fullName(firstName: string, lastName: string, middleName: string){
//    let fullName = `${firstName} ${middleName} ${lastName}`;
//    return fullName;
// }
// // This works:
// console.log(fullName("Mary", "Moore", "Tyler"));
// // What do I do if someone doesn't have a middle name?
// console.log(fullName("Jimbo", "Jones"));

//add ? to make param optional
function fullName(firstName: string, lastName: string, middleName?: string){
  let fullName = `${firstName} ${middleName} ${lastName}`;
  return fullName;
}
// This works:
console.log(fullName("Mary", "Moore", "Tyler"));
// What do I do if someone doesn't have a middle name?
console.log(fullName("Jimbo", "Jones"));

// 4. Interfaces and function parameters
// interface Student {
//    firstName: string;
//    lastName: string;
//    belts: number;
// }
// function graduate(ninja: Student){
//    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
// }
// const christine = {
//    firstName: "Christine",
//    lastName: "Yang",
//    belts: 2
// }
// const jay = {
//    firstName: "Jay",
//    lastName: "Patel",
//    belt: 4
// }
// // This seems to work fine:
// console.log(graduate(christine));
// // This one has problems:
// console.log(graduate(jay));

//jay had typo, belt should be belts
// 4. Interfaces and function parameters
interface Student {
  firstName: string;
  lastName: string;
  belts: number;
}
function graduate(ninja: Student){
  return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
}
const christine = {
  firstName: "Christine",
  lastName: "Yang",
  belts: 2
}
const jay = {
  firstName: "Jay",
  lastName: "Patel",
  belts: 4
}
// This seems to work fine:
console.log(graduate(christine));
// This one has problems:
console.log(graduate(jay));




// 5. Classes and function parameters
// class Ninja {
//    fullName: string;
//    constructor(
//       public firstName: string,
//       public lastName: string){
//          this.fullName = `${firstName} ${lastName}`;
//       }
//    debug(){
//       console.log("Console.log() is my friend.")
//    }
// }
// // This is not making an instance of Ninja, for some reason:
// const shane = Ninja();
// // Since I'm having trouble making an instance of Ninja, I decided to do this:
// const turing = {
//    fullName: "Alan Turing",
//    firstName: "Alan",
//    lastName: "Turing"
// }
// // Now I'll make a study function, which is a lot like our graduate function from above:
// function study(programmer: Ninja){
//    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
// }
// // Now this has problems:
// console.log(study(turing));


// 5. Classes and function parameters
class Ninja {
  fullName: string;
  constructor(
     public firstName: string,
     public lastName: string){
        this.fullName = `${firstName} ${lastName}`;
     }
  debug(){
     console.log("Console.log() is my friend.")
  }
}
// This is not making an instance of Ninja, for some reason:
//Solution: need to declare as new and pass in to params
const shane = new Ninja('Kuma', "Dog");
// Since I'm having trouble making an instance of Ninja, I decided to do this:
const turing = new Ninja("Alan", "Turing")

// Now I'll make a study function, which is a lot like our graduate function from above:
function study(programmer: Ninja){
  return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
}
// Now this has problems:
console.log(study(turing));

// 6. Arrow functions
// var increment = x => x + 1;
// // This works great:
// console.log(increment(3));
// var square = x => {x * x};
// // This is not showing me what I want:
// console.log(square(4));
// // This is not working:
// var multiply = x,y => x * y;
// // Nor is this working:
// var math = (x, y) => let sum = x + y;
//    let product = x * y;
//    let difference = Math.abs(x-y);
//    return [sum, product, difference];

// 6. Arrow functions
var increment = x => x + 1;
// This works great:
console.log(increment(3));
//remove {}!
var square = x => x * x;
// This is not showing me what I want:
console.log(square(4));
// This is not working:
//add ()
var multiply = (x,y) => x * y;
// Nor is this working:
//reordered!
var math = (x, y) => [sum, product, difference];
    let sum = (x,y) =>  x + y ;
    let product = (x,y) => x * y;
    let difference = (x, y) => Math.abs(x - y);

console.log(math(2,3))

// 7. Arrow functions and 'this'
// class Elephant {
//    constructor(public age: number){}
//    birthday = function(){
//       this.age++;
//    }
// }
// const babar = new Elephant(8);
// setTimeout(babar.birthday, 1000)
// setTimeout(function(){
//    console.log(`Babar's age is ${babar.age}.`)
//    }, 2000)
// // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.

class Elephant {
  constructor(public age: number) { }
  birthday = function () {
      this.age++;
  }
  updateAge = () => this.age
  //updateAge = () => this.age is same as the below!
  //updateAge = function () {
  //function to display age
  //return this.age
}
const babar = new Elephant(8);
setTimeout(babar.birthday(), 1000)
// invoke the birthday function
setTimeout(function () {
  console.log(`Babar's age is ${babar.updateAge()}.`)
  // invoke the eage function
}, 2000)
// Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.