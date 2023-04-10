// create a variable for Jon's health

let jonSnowHealth = 100;

jonSnowHealth = String(jonSnowHealth);
jonSnowHealth += ""; // string coersion

console.log(jonSnowHealth);

let theWinnerIs = "Jamie is the winner";
// strings are immutable

let theWinnerIs = theWinnerIs.replace("Jamie", "Jon");

console.log(theNewWinnerIs);

// check if string inlcudes Jon and console log it to confirm

if (theWinnerIs.includes("Jon")) {
  console.log("changes confirmed to string");
}

// lets convert our string to kebab case : jon-is-the-winner
let newWinnerKebab = theWinnerIs.toLowerCase().split(" ").join("-");

console.log(newWinnerKebab);

// Functions

function isJonAlive() {
  if (jonSnowHealth > 0) {
    console.log("Jon is alive");
  } else {
    console.log("Jon is dead");
  }
}

isJonAlive();

// function with params
const surpriseAttack = function (attack) {
  jonSnowHealth -= attack;
  isJonAlive();
};

surpriseAttack(30);
surpriseAttack(20);
surpriseAttack(25);

// function with multiple arguments
// create a function which takes in names of 2 people to greet

const greeting = (name1, name2) => {
  console.log(`${name1} says hello to ${name2}.`);
};

greeting("Hoyoung", "Mike");

// create a function to represent a dice roll

function rollDice() {
  let possibleRoles = [1, 2, 3, 4, 5, 6];
  let randomNumber = Math.floor(Math.random() * possibleRoles.length);
  return possibleRoles[randomNumber];
}

let firstRoll = rollDice();
let secondRoll = rollDice();

// create a function that callas rollDice twice and multiplies
// the value and returns it

function diceMultiplier() {
  let firstRoll = rollDice();
  let secondRoll = rollDice();

  return firstRoll * secondRoll;
}

let multipliedNumber = diceMultiplier();
