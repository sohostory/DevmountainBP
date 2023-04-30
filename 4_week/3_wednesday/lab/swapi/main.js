const resident = document.querySelector("#getResidents");
const answers = document.querySelector(".resident");

const getResidents = () => {
  axios.get("https://swapi.dev/api/planets/?search=Alderaan").then((res) => {
    let residents = res.data.results[0].residents;
    console.log(res.data);
    for (let resident of residents) {
      axios.get(resident).then((res) => {
        const name = res.data.name;
        const h2 = document.createElement("h2");
        h2.textContent = name;
        answers.append(h2);
      });
    }
  });
};

resident.addEventListener("click", getResidents);
