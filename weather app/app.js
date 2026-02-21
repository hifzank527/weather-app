const apiKey = "d12e271dd761c8f077d8003e8437e734"

function getWeather() {

    const cityName = document.getElementById("cityName");
    const cityName2 = document.getElementById("cityName2");
    const temperature = document.getElementById("temperature")
    const humidity = document.getElementById("humidity");
    const wind = document.getElementById("wind");
    const city = cityName.value.trim()

     const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;


    if(city === ""){
        cityName2.textContent= "City Not Found";
        return;
    }
    fetch(url)
    .then(response => response.json())
    .then(data =>{
        if(data.cod === "404"){
            cityName2.textContent = "City Not Found"
            humidity.textContent = ""
            temperature.textContent = ""
            wind.textContent = ""
            ;
        }else{
        cityName2.textContent = "City: " + data.name;
        temperature.textContent = "Temp🌡️: " + Math.round(data.main.temp) + "°C";
        humidity.textContent = "Humidity💧: " + data.main.humidity + "%";
        wind.textContent = "Wind🍃: " + data.wind.speed +"km/h";
        }
    })
}

const serachBtn = document.getElementById("search");
serachBtn.addEventListener("click", ()=>{
    getWeather();
    cityName.focus()
})

const cityName = document.getElementById("cityName");
cityName.addEventListener("keyup", (e)=>{
    if(e.key === "Enter"){
        getWeather()
    }
})

cityName.addEventListener("keyup", getWeather)