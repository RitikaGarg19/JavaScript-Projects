// /* This is the API Key which iis used to fetch Weather Data (039db7c99b33b6d00c8a421a233c54fc) from Open Weather */
const apiKey = "039db7c99b33b6d00c8a421a233c54fc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const WeatherIcon = document.querySelector('.Weather-Icon');

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

if(response.status == 404){
    document.querySelector(".error").style.display = "block"
     document.querySelector(".weather").style.display = "none"
}
else{
    var data = await response.json();

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "images/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/dizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "images/mist1.png";
    }
    else if(data.weather[0].main == "Wind"){
        WeatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block"
}

    var data = await response.json();

    // console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+ "°C";
 
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        WeatherIcon.src = "images/cloud.png";
    }
    else if(data.weather[0].main == "Clear"){
        WeatherIcon.src = "images/clear.jpeg";
    }
    else if(data.weather[0].main == "Rain"){
        WeatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        WeatherIcon.src = "images/dizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        WeatherIcon.src = "images/mist1.png";
    }
    else if(data.weather[0].main == "Wind"){
        WeatherIcon.src = "images/wind.png";
    }

    document.querySelector(".weather").style.display = "block"
     document.querySelector(".error").style.display = "none"
}

searchBtn.addEventListener("click" , ()=>{
checkWeather(searchBox.value);
})
