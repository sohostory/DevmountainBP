// Write your code below this line

const decodeString = (str) => {
  let arr = [];
  const decoder = Number(str[0]);

  for (let i = 1; i < str.length; i++) {
    let charCode = str[i].charCodeAt() + decoder; // subtract the decoder value
    if (charCode > 122) {
      // check if the character code is more than z'
      charCode -= 97; // wrap around to the front of the alphabet
    }
    arr.push(String.fromCharCode(charCode));
  }

  let res = arr.join("");
  return res;
};

const newString = decodeString("2fcjjm");
console.log(newString);
