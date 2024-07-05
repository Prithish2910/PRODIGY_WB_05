// script.js
document.getElementById('getWeatherBtn').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    getWeather(location);
});

function getWeather(location) {
    const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => displayWeather(data))
        .catch(error => console.error('Error fetching weather data:', error));
}

function displayWeather(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    if (data.cod === 200) {
        const { main, weather, name } = data;
        const { temp, feels_like, temp_min, temp_max, humidity } = main;
        const description = weather[0].description;

        weatherDisplay.innerHTML = `
            <h2>${name}</h2>
            <p>${description}</p>
            <p>Temperature: ${temp}°C</p>
            <p>Feels like: ${feels_like}°C</p>
            <p>Min: ${temp_min}°C, Max: ${temp_max}°C</p>
            <p>Humidity: ${humidity}%</p>
        `;
    } else {
        weatherDisplay.innerHTML = `<p>Location not found.</p>`;
    }
}
