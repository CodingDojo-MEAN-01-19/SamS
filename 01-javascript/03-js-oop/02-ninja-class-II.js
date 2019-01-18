//Assignment: Ninja Class II
// Complete the below challenges using Ninja from the previous assignment.

// .punch()
// Add a new method to Ninja called .punch(). This method will take another Ninja instance and subtract 5 Health from the Ninja we passed in. Your .punch() should display a console message like the below example.

// var blueNinja = new Ninja("Goemon");
// var redNinja = new Ninja("Bill Gates");
// redNinja.punch(blueNinja);
// // -> "Goemon was punched by Bill Gates and lost 5 Health!"
// .kick()
// Now add a method to your Ninja class called .kick(). Kick will subtract 15 Health for each point of Strength the calling Ninja has, and  .punch() will take another Ninja instance.

// blueNinja.kick(redNinja);
// // -> "Bill Gates was kicked by Goemon and lost 15 Health!"
// // In this case, redNinja Bill Gates lost 15 health because blueNinja Goemon has 1 point of strength
// Validations
// Update .punch() and .kick() so that they only accept Instances of Ninja. Hint: You will need to find a way to check the constructor of an instance. You will often need to consult outside documentation to find solutions for particular features.


function Ninja(x) {


  this.name = x;
  this.health = 100;
  var speed = 3; //private
  var strength = 3; //private
  this.showStats = function() {
    console.log(`Name: ${this.name} Health: ${this.health} Speed: ${speed} Strength: ${strength}`)
    return this;
  }
  this.kick = function(enemy) {
    if (enemy instanceof Ninja) {
      //console.log(enemy instanceof Ninja)
      const strengthcalc = strength * 15
      enemy.health -= strengthcalc
      console.log(enemy.name + ` was kicked by ${this.name} and lost ${strengthcalc} health!`)
    }
    //console.log(z.health)
  }

}

Ninja.prototype.sayName = function() {
  console.log(`My ninja name is ${this.name}!`)
  return this;
}

Ninja.prototype.drinkSake = function() {
  this.health += 10
  return this;  
}

Ninja.prototype.punch = function(enemy) {
  if (enemy instanceof Ninja) {
    //console.log(enemy instanceof Ninja)
    enemy.health -= 5
    //console.log(enemy.name)
    console.log(enemy.name + ` was punched by ${this.name} and lost 5 health!`)
    //console.log(enemy.health)
  }
}


const ninjaKuma = new Ninja("Kuma")
const ninjaMona = new Ninja("Mona")
// ninjaKuma.showStats()
// ninjaKuma.sayName()
// ninjaKuma.drinkSake()
// ninjaKuma.showStats()
ninjaKuma.punch(ninjaMona)
ninjaKuma.kick(ninjaMona)
ninjaKuma.showStats()
ninjaMona.showStats()