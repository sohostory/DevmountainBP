const {
  returnTwo,
  greeting,
  add,
  subtract,
  multiply,
  divide,
} = require("./functions");

test("basic test for returnTwo", () => {
  expect(returnTwo()).toEqual(2);
});

test("basic test for greeting", () => {
  expect(greeting("James")).toEqual("Hello, James.");
  expect(greeting("Jill")).toEqual("Hello, Jill.");
});

describe("testing add function", () => {
  test("basic test for add.", () => {
    expect(add(1, 2)).toEqual(3);
    expect(add(5, 9)).toEqual(14);
  });

  test("basic testing for subtract", () => {
    expect(subtract(5, 2)).toEqual(3);
    expect(subtract(50, 25)).toEqual(25);
  });

  test("basic testing for multiply", () => {
    expect(multiply(5, 5)).toEqual(25);
    expect(multiply(100, 100)).toEqual(10000);
  });

  test("basic testing for divide", () => {
    expect(divide(100, 25)).toEqual(4);
    expect(divide(25, 5)).toEqual(5);
  });
});
