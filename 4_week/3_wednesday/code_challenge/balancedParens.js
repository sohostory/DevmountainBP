// Sample Strings
let sample1 = "This ( is unbalanced.";
let sample2 = "(This (is (a) balanced) string.)";
let sample3 = "This is () also ) unbalanced.";
let sample4 = "Balanced.";

// Write your solution below:

function has_balanced_parens(str) {
  let open = 0;
  let close = 0;
  for (let char of str) {
    if (char === "(") {
      open++;
    } else if (char === ")") {
      close++;
    }
  }

  return open === close;
}

console.log(has_balanced_parens("(This has (too many closes.) ) )"));
