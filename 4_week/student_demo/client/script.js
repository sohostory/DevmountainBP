const justButton = document.querySelector("#justButton");
const textArea = document.querySelector(".response");

function getJoke() {
  const config = {
    method: "get",
    url: "https://icanhazdadjoke.com/",
    headers: {
      Accept: "application/json",
    },
  };

  // const response = axios(config).then((res) => {
  //   const joke = res.data.joke;
  //   textArea.textContent = joke;
  // });

  const response = axios
    .get("https://icanhazdadjoke.com/", {
      headers: {
        Accept: "application/json",
      },
    })
    .then((res) => {
      const joke = res.data.joke;
      textArea.textContent = joke;
    });
  console.log(response);
}

justButton.addEventListener("click", getJoke);
