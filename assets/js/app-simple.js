

const API_KEY = '9505fd1df737e20152fbd78cdb289b6a';
const API_URL = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=' + API_KEY;

let weatherElements = {};

function initElements() {
    console.log('Initializing weather elements...');
    weatherElements = {
        form: document.querySelector(".cuaca form"),
        input: document.getElementById('name'),
        cityDisplay: document.querySelector('.name'),
        tempDisplay: document.querySelector('.temperature'),
        description: document.querySelector('.description'),
        clouds: document.getElementById('clouds'),
        humidity: document.getElementById('humidity'),
        pressure: document.getElementById('pressure'),
        windSpeed: document.getElementById('wind-speed'),
        visibility: document.getElementById('visibility'),
        feelsLike: document.getElementById('feels-like'),
        tempMax: document.getElementById('temp-max'),
        tempMin: document.getElementById('temp-min'),
        coordinates: document.getElementById('coordinates'),
        container: document.querySelector('.cuaca')
    };
    
    // Log elements status
    for(let key in weatherElements) {
        if(!weatherElements[key]) {
            console.warn(` Element '${key}' not found`);
        } else {
            console.log(`✓ Element '${key}' found`);
        }
    }
    
    return !!weatherElements.form && !!weatherElements.input;
}

function updateWeather(data) {
    if(!data || data.cod != 200) {
        console.error('Invalid data:', data);
        return;
    }
    
    const el = weatherElements;
    
    try {
        // Main info
        if(el.cityDisplay) {
            el.cityDisplay.querySelector('figcaption').textContent = data.name + ', ' + data.sys.country;
            el.cityDisplay.querySelector('img').src = `https://flagsapi.com/${data.sys.country}/shiny/32.png`;
        }
        
        if(el.tempDisplay) {
            const tempSpan = el.tempDisplay.querySelector('span');
            tempSpan.textContent = Math.round(data.main.temp);
            el.tempDisplay.querySelector('img').src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
        }
        
        if(el.description) el.description.textContent = data.weather[0].description;
        
        // Basic info
        if(el.clouds) el.clouds.textContent = data.clouds.all;
        if(el.humidity) el.humidity.textContent = data.main.humidity;
        if(el.pressure) el.pressure.textContent = data.main.pressure;
        
        // Detail info
        if(el.windSpeed) el.windSpeed.textContent = data.wind.speed.toFixed(1) + ' m/s';
        if(el.visibility) el.visibility.textContent = (data.visibility / 1000).toFixed(1) + ' km';
        if(el.feelsLike) el.feelsLike.textContent = Math.round(data.main.feels_like) + ' °C';
        if(el.tempMax) el.tempMax.textContent = Math.round(data.main.temp_max) + ' °C';
        if(el.tempMin) el.tempMin.textContent = Math.round(data.main.temp_min) + ' °C';
        if(el.coordinates) el.coordinates.textContent = data.coord.lat.toFixed(2) + ', ' + data.coord.lon.toFixed(2);
        
        if(el.container) el.container.classList.remove('error');
        console.log('✓ Weather data updated successfully');
    } catch(err) {
        console.error('Error updating UI:', err);
    }
}

function searchWeather(cityName) {
    if(!cityName.trim()) return;
    
    const fetchUrl = API_URL + '&q=' + cityName;
    console.log('Fetching:', fetchUrl);
    
    fetch(fetchUrl)
        .then(res => res.json())
        .then(data => {
            console.log('API Response received');
            if(data.cod == 200) {
                updateWeather(data);
            } else {
                console.error('API Error:', data.message);
                if(weatherElements.description) {
                    weatherElements.description.textContent = 'Kota tidak ditemukan!';
                }
            }
            if(weatherElements.input) weatherElements.input.value = '';
        })
        .catch(err => {
            console.error('Fetch error:', err);
            if(weatherElements.description) {
                weatherElements.description.textContent = 'Error: ' + err.message;
            }
        });
}


if(document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

function init() {
    console.log('=== WEATHER APP INITIALIZED ===');
    
    if(!initElements()) {
        console.error('Failed to initialize elements');
        return;
    }
    
    if(weatherElements.form) {
        weatherElements.form.addEventListener('submit', (e) => {
            e.preventDefault();
            searchWeather(weatherElements.input.value);
        });
    }
    
    // Load default city
    console.log('Loading default city: Jakarta');
    searchWeather('Jakarta');
}
