// script.js

// Replace 'YOUR_API_KEY' with your actual OpenWeather API key
const API_KEY = 'ee64da14b14603b8f0f6a1434ef7d468';

// Function to fetch weather data
async function fetchWeatherData(city) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) throw new Error('City not found');
        const data = await response.json();
        updateWeatherInfo(data);
    } catch (error) {
        alert(error.message);
    }
}

// Function to update the weather information on the page
function updateWeatherInfo(data) {
    const cityName = document.getElementById('city-name');
    const temperature = document.getElementById('temperature');
    const condition = document.getElementById('condition');
    const humidity = document.getElementById('humidity');
    const windSpeed = document.getElementById('wind-speed');

    cityName.textContent = data.name;
    temperature.textContent = `Temperature: ${data.main.temp}°C`;
    condition.textContent = `Condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    windSpeed.textContent = `Wind Speed: ${data.wind.speed} km/h`;
}

// Event listener for the search button
document.getElementById('search-button').addEventListener('click', () => {
    const cityInput = document.getElementById('location-input').value.trim();
    if (cityInput) {
        fetchWeatherData(cityInput);
    } else {
        alert('Please enter a city name');
    }
});
