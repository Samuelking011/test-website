// script.js

function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'ed95fc2f7aaa052d55359f5523ca8129'; // Replace with your API key

    // Make a request to the OpenWeatherMap API
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            // Process the API response and display weather information
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp} &deg;C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = 'Error fetching weather data.';
        });
}
