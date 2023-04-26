const resident = document.querySelector("#getResidents");
const answers = document.querySelector(".resident");

function getResidents() {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    let residents = res.data.results[0].residents;
    for (let resident of residents) {
      axios.get(resident).then((res) => {
        const name = res.data.name;
        const h2 = document.createElement("h2");
        h2.textContent = name;
        answers.append(h2);
      });
    }
  });
}

resident.addEventListener("click", getResidents);
