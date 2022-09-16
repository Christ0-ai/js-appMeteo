let ville = document.querySelector(".ville");
let temperature = document.querySelector("#temperature-texte");
let vent = document.querySelector("#vent-texte");
let humidite = document.querySelector("#humidite-texte");

// Appel a l'API openWeather avec ville en parametre de fonction

const apiCall = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=37841d72110aecd24db0c62f7324ba72&lang=fr&units=metric`; // URL API METEO

  fetch(url)
    .then((response) => {
      response
        .json()
        .then((data) => {
          console.log(data);
          ville.innerHTML = city;
          humidite.innerHTML = data.main.humidity + "%";
          temperature.innerHTML = data.main.temp + "°C";
          vent.innerHTML = data.wind.speed + " Km/h";
        })
        .catch((e) => console.log(e));
    })
    .catch((e) => console.log(e));
};

// Ecouteur d'evenement sur la soumission du formulaire

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  let input_ville = document.querySelector(".input_ville").value;
  apiCall(input_ville);
});
