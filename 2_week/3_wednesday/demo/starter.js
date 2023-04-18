////////////////////////
////// CALCULATOR //////
////////////////////////

// CODE HERE

const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const calculator = (num1, num2, cb) => {
  // checking to see if the input is int
  if (+num1 && +(+num2)) {
    num1 = +num1;
    num2 = +num2;
    return cb(num1, num2);
  } else {
    return console.log("please provide numbers only");
  }
};

console.log(calculator(10, 2, divide));

///////////////////////
////// PET STORE //////
///////////////////////

const dogProducts = [
  {
    name: "leash",
    colors: ["red", "blue", "green"],
    category: 1,
    inventory: 30,
    basePrice: 13.99,
    displayPrice: 13.99,
  },
  {
    name: "chew toy",
    colors: ["brown"],
    category: 2,
    inventory: 120,
    basePrice: 6.0,
    displayPrice: 6.0,
  },
  {
    name: "rope",
    colors: ["blue & green", "red & yellow"],
    category: 2,
    inventory: 75,
    basePrice: 4.99,
    displayPrice: 4.99,
  },
];

const catProducts = [
  {
    name: "mouse toy",
    colors: ["pink", "grey", "black"],
    category: 2,
    inventory: 125,
    basePrice: 2.5,
    displayPrice: 2.5,
  },
  {
    name: "cat sweater",
    colors: ["black"],
    category: 1,
    inventory: 15,
    basePrice: 10.0,
    displayPrice: 10.0,
  },
  {
    name: "straching post",
    colors: ["tan"],
    category: 2,
    inventory: 40,
    basePrice: 22.99,
    displayPrice: 22.99,
  },
];

// CODE HERE

// apply discount by percentage or rate
// pass discount as decimals
const applyPercentDiscount = (product, discount) => {
  product.displayPrice = product.basePrice * (1 - discount);
};

const applyFlatDiscount = (product, discount) => {
  product.displayPrice = product.basePrice - discount;
};

// higher-order method that loops through to apply discounts

const applyDiscounts = (arr, cb, discount) => {
  arr.forEach((product) => {
    cb(product, discount);
  });
};

// apply discount by categories

const applyDiscountsByCategory = (arr, category, cb, discount) => {
  arr.forEach((product) => {
    if (product.category === category) {
      cb(product, discount);
    }
  });
};

// apply discount by inventory

const applyDiscountsByInventory = (arr, cb, amount, discount) => {
  arr.forEach((product) => {
    if (product.inventory < amount) {
      cb(product, discount);
    }
  });
};

applyDiscounts(dogProducts, applyPercentDiscount, 0.1);
console.log(dogProducts);

applyDiscounts(catProducts, applyFlatDiscount, 2);
console.log(catProducts);

applyDiscountsByCategory(catProducts, 2, applyPercentDiscount, 0.15);
console.log(catProducts);

applyDiscountsByCategory(dogProducts, 1, applyPercentDiscount, 0.3);
console.log(dogProducts);

applyDiscountsByInventory(dogProducts, applyFlatDiscount, 40, 5);
console.log(dogProducts);

applyDiscountsByInventory(catProducts, applyPercentDiscount, 40, 0.5);
console.log(catProducts);

////////////////////////
////// SANDWICHES //////
////////////////////////

// CODE HERE

const makeSandwich = (bread) => {
  return (ingredients) => {
    let order = `You ordered a ${bread} bread sandwich with`;
    for (let i = 0; i < ingredients.length; i++) {
      if (i === ingredients.length - 1 && i !== 0) {
        order += `and ${ingredients[i]}.`;
      } else if (ingredients.length === 1) {
        order += `${ingredients[i]},`;
      } else {
        order += `${ingredients[i]}, `;
      }
    }
  };
};

const mySandwich = makeSandwich("wheat");

console.log(mySandwich(["cheese", "tomatoes"]));
