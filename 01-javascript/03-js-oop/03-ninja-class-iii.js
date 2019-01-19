class Ninja {
  constructor(input) {
  this.name = input;
  this.health = 100;
  this.speed = 3;
  this.strength = 3;
  }
  sayName() {
    console.log(this.name)
    return this
  }

  showStats() {
    console.log(`${this.name} STATS: Health is ${this.health} Speed is ${this.speed} Strength is ${this.strength}`)
    return this
  }

  drinkSake() {
    this.health += 10
    // console.log(this.health)
    return this
  }

}

class Sensei extends Ninja {
  constructor(input) {
    super(input);
    this.name = input;
    this.health = 200;
    this.speed = 10;
    this.strength = 10;
    }
    speakWisdom() {
      super.drinkSake()
      console.log("What one programmer can do in one month, two programmers can do in two months.")
      return this
    }
}

let kuma = new Ninja("Kuma");
let mona = new Sensei("Mona");

kuma.sayName().showStats().drinkSake().showStats()
mona.speakWisdom()
mona.showStats()