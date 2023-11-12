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