// Fetching data from countries.json locally
fetch("js/countries.json")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let totalCountries = document.getElementById("totalCountries");
    totalCountries.textContent = data.length;
    str = "";
    for (let i = 0; i < data.length; i++) {
      let dataToShow = data[i].country;
      str += `
        <div id="country${
          i + 1
        }" class="card text-white bg-success mb-3" style="width: 12rem; height: 200px; text-align: center">
        <div class="card-body">
          <h5 id="title${i + 1}" class="card-title">${dataToShow}</h5>
        </div>
      </div>
`;
      document.getElementById("all").innerHTML = str;
    }

    // SEARCH FUNCTIONALITY
    let userCountry = document.getElementById("userCountry");
    let searchBtn = document.getElementById("searchBtn");
    userCountry.addEventListener("input", showSearchedCountry);
    function showSearchedCountry() {
      console.log("Searching");
      for (let i = 0; i < data.length; i++) {
        let countryTitle = document.getElementById(`title${i + 1}`);
        if (
          countryTitle.innerText
            .toLowerCase()
            .includes(userCountry.value.toLowerCase())
        ) {
          let country = document.getElementById(`country${i + 1}`);
          country.style.display = "inline-flex";
        } else {
          let country = document.getElementById(`country${i + 1}`);
          country.style.display = "none";
        }
      }
    }
  });

// TYPING EFFECT
var typed = new Typed("#author", {
  strings: [
      "Hussnain Ahmad",
  "Ha Rajpoot"
            ],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true
});
