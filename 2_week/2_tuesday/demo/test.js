const arr = [5, 4, 3, 10, 15];

for (let i in arr) {
  console.log(arr[i]);
}

const mapArray = arr.map((num) => num * 2);

console.log("map:", mapArray);

const dog = {
  name: "Freida",
  color: "brown/black",
  hunger: 40,
  mood: "feisty",
  age: 9,
};

for (let attribute in dog) {
  console.log(`The dog's ${attribute} is ${dog[attribute]}.`);
}
