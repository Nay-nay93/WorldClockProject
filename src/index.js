
function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

}

let romeElement = document.querySelector("#rome");
if (romeElement) {
let romeDateElement = romeElement.querySelector(".date");
let romeTimeElement = romeElement.querySelector(".time");
let romeTime = moment().tz("Europe/Rome");

romeDateElement.innerHTML = romeTime.format("MMM Do YYYY");
romeTimeElement.innerHTML = romeTime.format("h:mm:ss [<small>]A[</small>]");
}
}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="city">
        <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
        </div>
        <div class="time">${cityTime.format("h:mm:ss")} <small>${cityTime.format("A")}</small></div>
    </div>`;

  
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);