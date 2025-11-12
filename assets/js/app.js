let id = '9505fd1df737e20152fbd78cdb289b6a';
let url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + id;

// Element references - akan di-set saat DOMContentLoaded
let form, valueSearch, city, temperature, description;
let clouds, humidity, pressure, weatherContainer;
let windSpeed, visibility, feelsLike, tempMax, tempMin, coordinates, tempDisplay;

// Fungsi untuk update weather data
function updateWeatherUI(data) {
    if(data.cod != 200) return;
    
    try {
        // Update city dan temperature
        city.querySelector('figcaption').innerHTML = data.name + ', ' + data.sys.country;
        city.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        
        temperature.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        temperature.querySelector('span').innerText = Math.round(data.main.temp);
        if(tempDisplay) tempDisplay.innerText = Math.round(data.main.temp);
        
        description.innerText = data.weather[0].description;
        
        // Update basic info
        clouds.innerText = data.clouds.all;
        humidity.innerText = data.main.humidity;
        pressure.innerText = data.main.pressure;
        
        // Update detail info
        windSpeed.innerText = data.wind.speed + ' m/s';
        visibility.innerText = (data.visibility / 1000).toFixed(1) + ' km';
        feelsLike.innerText = Math.round(data.main.feels_like) + ' °C';
        tempMax.innerText = Math.round(data.main.temp_max) + ' °C';
        tempMin.innerText = Math.round(data.main.temp_min) + ' °C';
        coordinates.innerText = data.coord.lat.toFixed(2) + ', ' + data.coord.lon.toFixed(2);
        
        weatherContainer.classList.remove('error');
        console.log('✓ Weather data updated successfully');
    } catch(err) {
        console.error('Error updating UI:', err);
    }
}

// Fungsi search weather
function searchWeather(cityName) {
    const fetchUrl = url + '&q=' + cityName;
    console.log('Fetching weather for:', cityName);
    
    fetch(fetchUrl)
        .then(response => response.json())
        .then(data => {
            console.log('API Response:', data);
            
            if(data.cod == 200) {
                updateWeatherUI(data);
            } else if(data.cod == 404) {
                description.innerText = 'Kota tidak ditemukan!';
                weatherContainer.classList.add('error');
            } else {
                description.innerText = 'Error: ' + (data.message || 'Unknown error');
                weatherContainer.classList.add('error');
            }
            valueSearch.value = '';
        })
        .catch(error => {
            console.error('Fetch error:', error);
            description.innerText = 'Gagal mengambil data cuaca';
            weatherContainer.classList.add('error');
        });
}

// Initialize saat DOM ready
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Ready - Getting elements...');
    
    // Get all elements
    form = document.querySelector(".cuaca form");
    valueSearch = document.getElementById('name');
    city = document.querySelector('.name');
    temperature = document.querySelector('.temperature');
    description = document.querySelector('.description');
    clouds = document.getElementById('clouds');
    humidity = document.getElementById('humidity');
    pressure = document.getElementById('pressure');
    weatherContainer = document.querySelector('.cuaca');
    windSpeed = document.getElementById('wind-speed');
    visibility = document.getElementById('visibility');
    feelsLike = document.getElementById('feels-like');
    tempMax = document.getElementById('temp-max');
    tempMin = document.getElementById('temp-min');
    coordinates = document.getElementById('coordinates');
    tempDisplay = document.getElementById('temp');
    
    // Log elements for debugging
    console.log('Elements found:');
    console.log('- Form:', !!form);
    console.log('- Input:', !!valueSearch);
    console.log('- City:', !!city);
    console.log('- Temp:', !!temperature);
    console.log('- Wind Speed:', !!windSpeed);
    console.log('- Visibility:', !!visibility);
    console.log('- Feels Like:', !!feelsLike);
    console.log('- Temp Max:', !!tempMax);
    console.log('- Temp Min:', !!tempMin);
    console.log('- Coordinates:', !!coordinates);
    
    // Check if all critical elements exist
    if(!form || !valueSearch || !city || !temperature || !description) {
        console.error('Critical elements missing!');
        return;
    }
    
    // Add form submit listener
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        if(valueSearch.value.trim()) {
            searchWeather(valueSearch.value);
        }
    });
    
    // Load default city
    console.log('Loading default city: Jakarta');
    searchWeather('Jakarta');
});
