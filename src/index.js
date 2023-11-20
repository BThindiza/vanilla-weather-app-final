function refreshWeather(){
    let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
    let cityElement = document.querySelector("#city");
    let descriptionElement = document.querySelector("#description");
    let humidityElement = document.querySelector("#humidity");
    let windElement = document.querySelector("#wind");
    let timeElement = document.querySelector("#time");
    let date = new Date(response.data.time * 1000);
    let iconElement = document.querySelector("#icon");

temperatureElement.innerHTML= Math.round(temperature);
cityElement.innerHTML= response.data.city;
    descriptionElement.innerHTML = response.data.condition.description;
humidityElement.innerHTML = `${response.data.temperature.humiduty}%`;
windElement.innerHTML = `${response.data.wind.speed}km/h`;
timeElement.innerHTML = formatDate(date);
iconElement.innerHTML = `<img src ="${response.data.condition.icon_url}"class="weather-icon"/>`;

getForecast(response.data.city);

}

function formatDate(timestamp){
    let date = newDate(timestamp)
    let hours =date.getHours();
    if (hours<10){
        hours= `0${hours}`;
    }
    let minutes =date.getMinutes();
    if(minutes<10){
        minutes=`0${minutes}`;
    }
    let days =[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    let day =days[date.getDay()];
    return `${day} ${hours}:${minutes}`; 
}

function searchCity(city){
    let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
    let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(refreshWeather);
}
 function handleSearchSubmit(event){
    event.preventDefault();
    let searchInput = document.querySelector("#city-input");
    searchCity(searchInput.value);
 }
 function formatDay(timestamp){
    let date = new Date(timestamp*1000);
    let days =["Sun","Mon","Tue","Wed","Thurs","Fri","Sat"];
    return days[date.getDay()];
 }
 function getForecast(city){
    let apiKey ="3t1a5685d95o5fd95bdaaac3a43d5083";
    let apiUrl =`https://api.shecodes.io/weather/v1/forecast?query=${city}&key=${apiKey}&units=metric`;
    axios(apiUrl).then(displayForecast);
 }

function displayForecast(){
    let days= ["Monday","Tuesday","Thursday","Friday","Saturday"];
    let forecastHtml= "";
    days.forEach(function(day,index){
        if(index<5){
        forecastHtml = forecastHtml + 
        `  <div class="weather-forecast-day">
        <div class="weather-forecast-date">${formatDate(day.time)}</div>
        <div class="weather-icon">
            <img src="${day.condition.icon_url}" class="weather-icon"/>
</div>
</div>
<div class="forecast-temperature">
    <span class="forecast-temperature-max">${Math.round(day.temperature.maximum)}°</span>
    <span class="forecast-temperature-min">${Math.round(day.temperature.minimum)}°</span>
</div>
</div>
        </div>
    </div>
</div>
</div>
`;
        }
    });
    
    let forecastElement = document.querySelector("#forecast");
    forecastElement.innerHTML= forecastHtml;
}
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("sumbit",handleSearchSubmit)

searchCity("Polokwane");