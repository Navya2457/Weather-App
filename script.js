async function getWeather() {
    const cityInput = document.getElementById('cityInput').value;
    const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        if (response.ok) {
            const weatherInfo = document.getElementById('weatherInfo');
            weatherInfo.innerHTML = `
                <p>City: ${data.name}</p>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
            `;
        } else {
            throw new Error(data.message);
        }
    } catch (error) {
        console.error('Error fetching weather data:', error.message);
    }
}
