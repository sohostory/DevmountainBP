let toBoolean = Boolean(10);
console.log("Boolean:", toBoolean);

let toNumber = Number(true);
console.log("toNumber:", toNumber);

const numInt = +"999";
console.log("numInt:", typeof numInt, numInt);

let evenNumber = 24;
let stringTo = String(evenNumber);
console.log("stringTo", typeof stringTo, stringTo);

let doesItInclude = stringTo.includes("2");
console.log("includes", doesItInclude);

let doesItStartWith = stringTo.startsWith("2");
console.log("startWith:", doesItStartWith);

let doesItEndWith = stringTo.endsWith("4");
console.log("endsWith:", doesItEndWith);

let hello = "   hello   ";
let newHello = hello.trim();
console.log("trim:", newHello);
