const inputField = document.querySelector("input");
const form = document.querySelector("form");
const message = document.querySelector("#message");

const addMovie = (event) => {
  event.preventDefault();
  let movie = document.createElement("li");
  let movieTitle = document.createElement("span");
  movieTitle.addEventListener("click", crossOffMovie);
  movieTitle.textContent = inputField.value;
  movie.appendChild(movieTitle);

  // new delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "X";
  deleteBtn.addEventListener("click", deleteMovie);
  movie.appendChild(deleteBtn);

  document.querySelector("ul").appendChild(movie);
  inputField.value = "";
};

const deleteMovie = (event) => {
  const spanElement = event.target.parentNode.querySelector("span");

  event.target.parentNode.remove();
  console.log(event.target.parentNode);
  message.textContent = `${spanElement.textContent} Deleted!`;
  revealMessage();
};

const crossOffMovie = (event) => {
  event.target.classList.toggle("checked");
  if (event.target.classList.contains("checked")) {
    message.textContent = `${event.target.textContent} watched!`;
  } else {
    message.textContent = `${event.target.textContent} added back!`;
  }
};

const revealMessage = () => {
  setTimeout(() => message.classList.add("hide"), 1000);
};

form.addEventListener("submit", addMovie);
