const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'aede17b93fmsh736d71a887a0597p15687ejsn464b747e020b',
        'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
    }
};

async function getWeather(city) {
    cityname.innerHTML = city; 
    const url = `https://open-weather13.p.rapidapi.com/city/${city}/EN`;

    try {
        const response = await fetch(url, options);
        const data = await response.json(); // Assuming the new API returns a JSON response

      
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
        // wind_degrees.innerHTML = data.wind_degrees; // Uncomment if available in the new API response
    } catch (error) {
        console.error(error);
    }
}


submit.addEventListener("click", (e) => {
    e.preventDefault();
    getWeather(city.value); 
});

// Initial fetch for a default city
getWeather("Jharia");
