

// class cards {
//   constructor() {
//     this.cards = [];
//   }
//     reset() {
//       this.cards = [];
//       const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
//       const cardValue = ['Ace'];
//       for (const i of suits) {
//         for (const j of cardValue) {
//             this.cards.push(`${ j } of ${ i }`);
//         }
//       }
//       console.log("SHould return here")
//       return this;
    
    
//   }
  

//   shuffle() {
//     var m = this.cards.length, t, i;
  
//     // While there remain elements to shuffle…
//     while (m) {
  
//       // Pick a remaining element…
//       i = Math.floor(Math.random() * m--);
  
//       // And swap it with the current element.
//       t = this.cards[m];
//       this.cards[m] = this.cards[i];
//       this.cards[i] = t;
//     }
//     console.log(this.cards)
//     return this;
//   }

//   // show(){
//   //   console.log(this.)
//   // }

//   deal(){
//     return this.cards.pop()
//   }

// }

// class Player {
//   constructor(input){
//     this.name = input;
//     this.hand = [];
//   }
//   draw(cards) {
//     this.hand.push(cards.deal());
//     return this;
//   }

//   discard(){
//     this.hand.pop()
//     return this;
//   }
// }




// const dealtcards = new cards();
// console.log("new cards" , dealtcards) 
// // dealtcards.shuffle();
// console.log("deals a card",  dealtcards.shuffle().deal()); 
// console.log("current state of cards" , dealtcards)
// dealtcards.reset();
// console.log("Ran reset. Current state of cards is" , dealtcards)


// // const kuma = new Player('Kuma');
// // kuma.draw(dealtcards).draw(dealtcards).draw(dealtcards).draw(dealtcards).draw(dealtcards);
// // var x = kuma.discard(dealtcards)
// // console.log(x);


class cards {
  constructor() {
      this.cards = [];
      //invokes reset everytime contructor is built.
      this.reset();

  }

  reset() {
      this.cards = []; //or this.cards.length = 0;
      const suits = ['Spades', 'Diamonds', 'Hearts', 'Clubs'];
      const cardValue = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King']
      for (const i of suits) {
          for (const j of cardValue) {
              //pass information to card constructor
              const card = new Card(i, j)
              this.cards.push(card)

          }
      }
      return this;
  }

  deal() {
      return this.cards.pop();
  }
  shuffle() {
      var m = this.cards.length,
          t, i;

      // While there remain elements to shuffle…
      while (m) {

          // Pick a remaining element…
          i = Math.floor(Math.random() * m--);

          // And swap it with the current element.
          t = this.cards[m];
          this.cards[m] = this.cards[i];
          this.cards[i] = t;
      }
      console.log(this.cards)
      return this;
  }

}

class Card {
  //constructor takes two parameters
  constructor(suit, value) {
      // the two parameters get assigned to instance variables
      this.suit = suit;
      this.value = value;
      this.display = `${this.value} of ${this.suit}`
  }

}

class Player {
  constructor(input) {
      this.name = input;
      this.hand = [];
  }
  draw(cards) {
      //creates a hand
      this.hand.push(cards.deal());
      return this;
  }

  discard() {
      this.hand.pop();
      return this;
  }
}

dealtcards = new cards();
dealtcards.shuffle();
// console.log(dealtcards)

const kuma = new Player('Kuma');

kuma.draw(dealtcards).draw(dealtcards).draw(dealtcards).draw(dealtcards).draw(dealtcards);
console.log(kuma)
kuma.discard();
console.log(kuma)