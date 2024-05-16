const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'aede17b93fmsh736d71a887a0597p15687ejsn464b747e020b',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

function getWeather(city) {
    cityname.innerHTML = city; // Assuming cityname is the ID of the element where you want to display the city name
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
        .then(response => response.json())
        .then((data) => {
            // Update HTML elements with fetched data
            cloud_pct.innerHTML = data.cloud_pct;
            temp.innerHTML = data.temp;
            temp2.innerHTML = data.temp;
            feels_like.innerHTML = data.feels_like;
            humidity.innerHTML = data.humidity;
            humidity2.innerHTML = data.humidity;
            min_temp.innerHTML = data.min_temp;
            max_temp.innerHTML = data.max_temp;
            sunrise.innerHTML = data.sunrise;
            sunset.innerHTML = data.sunset;
            wind_speed.innerHTML = data.wind_speed;
            wind_speed2.innerHTML = data.wind_speed;
           // wind_degrees.innerHTML = data.wind_degrees;
           
        })
        .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
    e.preventDefault();
     // Assuming city is the ID of the input field where user inputs the city name
    getWeather(city.value);
});

// Initial fetch for a default city
getWeather("Jharia");


// function updateTableCell(cityname, data) {
//     document.getElementById(cityname.toLowerCase() + '_cloud_pct').innerHTML = data.cloud_pct.city;
//     document.getElementById(cityname.toLowerCase() + '_temp').innerHTML = data.temp;
//     document.getElementById(cityname.toLowerCase() + '_feels_like').innerHTML = data.feels_like;
//     document.getElementById(cityname.toLowerCase() + '_humidity').innerHTML = data.humidity;
//     document.getElementById(cityname.toLowerCase() + '_min_temp').innerHTML = data.min_temp;
//     document.getElementById(cityname.toLowerCase() + '_max_temp').innerHTML = data.max_temp;
//     document.getElementById(cityname.toLowerCase() + '_wind_speed').innerHTML = data.wind_speed;
//     document.getElementById(cityname.toLowerCase() + '_sunrise').innerHTML = data.sunrise;
//     document.getElementById(cityname.toLowerCase() + '_sunset').innerHTML = data.sunset;
// }

// // Fetch weather data for each city and update the table cells
// Promise.all([
//     getWeather('Delhi'),
//     getWeather('Mumbai'),
//     getWeather('Chennai'),
//     getWeather('Kolkata')
// ]).then(([delhiData, mumbaiData, chennaiData, kolkataData]) => {
//     updateTableCell('Delhi', delhiData);
//     updateTableCell('Mumbai', mumbaiData);
//     updateTableCell('Chennai', chennaiData);
//     updateTableCell('Kolkata', kolkataData);
// }).catch(err => console.error(err));

