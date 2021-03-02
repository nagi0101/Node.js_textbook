// console.log("Old Class");
// var Human = function (type) {
//   this.type = type || "Human";
// };

// Human.isHuman = function (human) {
//   return human instanceof Human;
// };

// Human.prototype.breath = function () {
//   console.log("haaaam");
// };

// var Zero = function (type, firstName, lastName) {
//   Human.apply(this, arguments);
//   this.firstName = firstName;
//   this.lastName = lastName;
// };

// Zero.prototype = Object.create(Human.prototype);
// Zero.prototype.constructor = Zero;
// Zero.prototype.sayName = function () {
//   console.log(this.firstName + " " + this.lastName);
// };

// var oldZero = new Zero("Human", "Zero", "Cho");
// oldZero.sayName();
// console.log(Human.isHuman(oldZero));

console.log("New Class");
class Human {
  constructor(type = "human") {
    this.type = type;
  }

  static isHuman(human) {
    return human instanceof Human;
  }

  breathe() {
    console.log("haaam");
  }
}

class Zero extends Human {
  constructor(type, firstName, lastName) {
    super(type);
    this.firstName = firstName;
    this.lastName = lastName;
  }

  sayName() {
    super.breathe();
    console.log(`${this.firstName} ${this.lastName}`);
  }
}

const newZero = new Zero("human", "Zero", "Cho");
console.log(Human.isHuman(newZero));
