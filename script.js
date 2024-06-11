const BASE_URL = `https://api.openweathermap.org/data/2.5/weather?appid=13fffd73b599185b816bef7f5ef88bf3&units=metric&q=`;
//https://api.weatherapi.com/v1/current.json?key=03b4e8ee1aae42febae01433241106&q=washington


const input = document.querySelector(".search input");
const temperature = document.querySelector(".temp");
const city = document.querySelector(".city");
const wind = document.querySelector(".wind");
const humidity = document.querySelector(".humidity");
const search = document.querySelector(".search button");
const weather_img = document.querySelector(".weather-icon");
const display_weather = document.querySelector(".weather");

///input.hide;
//console.log(input);

// window.addEventListener("load", () => {
//     getWeatherUpdate();
// })

search.addEventListener("click", (evt) => {
    evt.preventDefault();
    getWeatherUpdate(input.value);
})

async function getWeatherUpdate(cityVal){
    let response = await fetch(BASE_URL + cityVal);
    let data = await response.json();
    console.log(data);
    temperature.innerText = Math.floor(data.main.temp) + "°C";
    city.innerText = data.name;
    humidity.innerText = data.main.humidity + "%";
    wind.innerText = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weather_img.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weather_img.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weather_img.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weather_img.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weather_img.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weather_img.src = "images/snow.png";
    }
    display_weather.style.display = "block"

}

