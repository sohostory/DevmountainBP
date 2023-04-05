/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/

// Create a variable for jon and jamie's attack
let jonSnowAttack = 25;
let jamieLannisterAttack = 35;

if (jonSnowAttack > jamieLannisterAttack) {
  console.log("Jon has greater attack");
} else if (jonSnowAttack === jamieLannisterAttack) {
  console.log("Even Match");
} else {
  console.log(`Jamie has greater attack`);
}

let jonSnowHealth = 100;
let jonSnowDefense = 0;

if (jonSnowHealth <= jamieLannisterAttack) {
  console.log("Jon Snow is dead");
} else {
  jonSnowHealth -= jamieLannisterAttack;
  console.log(`Jon's current health is ${jonSnowHealth}`);
}

jonSnowDefense += 25;

if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
  console.log("Jon Snow is dead.");
} else {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon's current health is ${jonSnowHealth}`);
}

// Health Kit of 50, max of 100

if (jonSnowHealth + 50 >= 100) {
  jonSnowHealth = 100;
} else {
  jonSnowHealth += 50;
}

// Coin toss

let coinTossHeads = false;

if (coinTossHeads) {
  console.log("Fight continues.");
} else {
  console.log("Jon runs away.");
}

// Fight 5 times

for (let i = 0; i < 5; i++) {
  if (jonSnowHealth <= 0) {
    console.log("Jon is dead.");
  } else {
    jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
    console.log(`Jon's current health is ${jonSnowHealth}`);
  }
}

// Attack until dead

while (jonSnowHealth > 0) {
  jonSnowHealth -= jamieLannisterAttack - jonSnowDefense;
  console.log(`Jon's current health is ${jonSnowHealth}`);
  if (jonSnowHealth <= 0) {
    console.log("Jon is dead.");
  }
}
