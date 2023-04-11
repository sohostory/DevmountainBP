// OOP Demo

let person = {
  firstName: "Michael",
  lastName: "Scott",
  age: 34,
};

// console.log(person.firstName);
// console.log(person['firstName']);

let meal = {
  appetizer: "cheese sticks",
  entree: "chicken parm",
  dessert: "ice cream",
  drink: "Coke",
};

// let { dessert } = meal;
// console.log(dessert);

// let { entree, appetizer } = meal;
// console.log(entree, appetizer);

// const { drink: cola } = meal;
// console.log(meal.drink);
// console.log(cola);

// for (let key in meal) {
//   console.log(key, meal[key]);
// }

// person.job = "Web Developer";
// person.pet = ["chicken", "duck"];
// person.pet.push("dog");
// console.log(person);

let teams = {
  teamOne: ["ryan", "alex", "wyatt", "tj"],
  teamTwo: ["henry", "cole", "charlie", "zeke"],
  teamThree: ["porter", "blake", "june", "owen"],
  teamFour: ["brian", "riley", "ezra", "jordan"],
  teamFive: ["grey", "milo", "mckay", "leo"],
};

// delete teams.teamFour;
// console.log(teams);

class Car {
  constructor(make, model, year, color) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.miles = 0;
  }

  drive(milesToDrive) {
    this.miles += milesToDrive;
  }
}

class Sedan extends Car {
  constructor(make, model, year, color, type) {
    super(make, model, year, color);

    this.type = type;
    this.passengerCount = 5;
  }
}

let vinsonsCar = new Sedan("Tesla", "model 3", 2025, "Matte Black", "Electric");
vinsonsCar.drive(100);
console.log(vinsonsCar);

let chasesCar = new Car("Pontiac", "GrandPrix", 1998, "red");
let ashleysCar = new Car("Music", "mp3", 2001, "blue");

chasesCar.drive(100);
ashleysCar.drive(10);

console.log(chasesCar);
console.log(ashleysCar);
