const apiKey = "5cb1e7c1958db1327fd255ff75b6264b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const defaultLocation = "Bedworth"
d = new Date()
document.getElementById("fullDate").innerHTML = d;
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    if (data.cod == "400") {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }
    else {

        console.log(data);

        document.querySelector(".city").innerHTML = "City" + ": " + data.name;
        document.querySelector(".temp").innerHTML = data.main.temp + " °C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
        document.querySelector(".wind").innerHTML = data.wind.speed + " Km/H";

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "img/cloudy.png"
        }
        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Thunderstorm") {
            weatherIcon.src = "img/cloud.png"
        }
        else if (data.weather[0].main == "Atmosphere") {
            weatherIcon.src = "img/cloud.png"
        }
        document.querySelector(".error").style.display = "none";
        // document.querySelector(".weather").style.display = "block";
    }

}
checkWeather(defaultLocation)
searchButton.addEventListener("click", () => {
    checkWeather(searchBox.value)
})


