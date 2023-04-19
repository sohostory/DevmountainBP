let count = 0;

// get HTML elment querySelector
let counter = document.querySelector("#counter");
let minusBtn = document.querySelector("#minus-btn");
let plusBtn = document.querySelector("#plus-btn");
let resetBtn = document.querySelector("#reset-btn");

// create callback

let increment = () => {
  count++;
  counter.textContent = count;
};

let decrement = () => {
  count--;
  counter.textContent = count;
};

let reset = () => {
  count = 0;
  counter.textContent = count;
};

// connect HTML element and callback with event listener
plusBtn.addEventListener("click", increment);
minusBtn.addEventListener("click", decrement);
resetBtn.addEventListener("click", reset);

let themeBtn = document.getElementsByClassName("theme-buttons");
let body = document.querySelector("body");
let main = document.querySelector("main");
let btns = document.getElementsByTagName("button");

let themeSelector = (event) => {
  let theme = event.target.textContent;
  console.log(theme);
  body.className = theme;
  main.className = theme;

  for (let i = 0; i < btns.length; i++) {
    btns[i].className = theme;
  }
};

for (let i = 0; i < themeBtn.length; i++) {
  themeBtn[i].addEventListener("click", themeSelector);
}

themeBtn.addEventListener("click", themeSelector);
