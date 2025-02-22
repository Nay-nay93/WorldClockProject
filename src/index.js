
function updateTime() {

let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let losAngelesDateElement = losAngelesElement.querySelector(".date");
let losAngelesTimeElement = losAngelesElement.querySelector(".time");
let losAngelesTime = moment().tz("America/Los_Angeles");

losAngelesDateElement.innerHTML = losAngelesTime.format("MMM Do YYYY");
losAngelesTimeElement.innerHTML = losAngelesTime.format("h:mm:ss [<small>]A[</small>]");

}

let athensElement = document.querySelector("#athens");
if (athensElement) {
let athensDateElement = athensElement.querySelector(".date");
let athensTimeElement = athensElement.querySelector(".time");
let athensTime = moment().tz("Europe/Athens");

athensDateElement.innerHTML = athensTime.format("MMM Do YYYY");
athensTimeElement.innerHTML = athensTime.format("h:mm:ss [<small>]A[</small>]");
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
    if (cityTimeZone === "current") { cityTimeZone = moment.tz.guess();}
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