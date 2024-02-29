// API key
const apiKey = '3bc4281ac2a7cd3e1e57f028b680ce2f';

// The base URL of the weather forecast API
const baseUrl = 'https://api.openweathermap.org/data/2.5';

function getWeather(city) {
    const url = `${baseUrl}/forecast?q=${city}&units=metric&cnt=5&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            // Get the weather data div
            const weatherDataDiv = document.getElementById('weather-data');

            // Clear any existing weather data
            weatherDataDiv.innerHTML = '';

            // Create a new div for each weather data point
            data.list.forEach(weatherDataPoint => {
                const weatherDataPointDiv = document.createElement('div');
                weatherDataPointDiv.className = 'weather-card'; // Assign the class here
                weatherDataPointDiv.textContent = `Temperature: ${weatherDataPoint.main.temp}°C, Weather: ${weatherDataPoint.weather[0].description}`;
                weatherDataDiv.appendChild(weatherDataPointDiv);
            });
        })
        .catch(error => {
            // Handle the error here
            console.error('Error:', error);
        });
}

// Get the form and add an event listener
const form = document.getElementById('weather-form');

form.addEventListener('submit', function(event) {
    // Prevent the form from being submitted
    event.preventDefault();

    // Get the entered city
    const city = document.getElementById('city').value;

    // Call the getWeather function with the entered city
    getWeather(city);
});