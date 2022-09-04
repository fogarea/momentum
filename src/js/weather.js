import language from './languages.js';
const cityInput = document.querySelector('.city');
const weatherIcon = document.querySelector('.weather-icon');
const weatherError = document.querySelector('.weather-error');
const temperature = document.querySelector('.temperature');
const weatherDescription = document.querySelector('.weather-description');
const wind = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');

let siteLanguage;
cityInput.value = 'Minsk';

// weather
const getWeather = async () => {
    getLocalStorage();
    getCity();
    try {
        if (cityInput.value === 'Минск' && siteLanguage === 'en') cityInput.value = 'Minsk';
        if (cityInput.value === 'Minsk' && siteLanguage === 'ru') cityInput.value = 'Минск';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&lang=${siteLanguage}&appid=3610b61af2a3b6a218dd5b6a256a6137&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        weatherIcon.className = 'weather-icon owf';
        weatherIcon.classList.add(`owf-${data.weather[0].id}`);
        weatherError.textContent = ''
        temperature.textContent = `${Math.floor(data.main.temp)}°C`;
        weatherDescription.textContent = data.weather[0].description;
        wind.textContent = `${language['Wind speed'][siteLanguage]}: ${Math.floor(data.wind.speed)} ${siteLanguage == 'en' ? 'm/s' : 'м/с'}`;
        humidity.textContent = `${language['Humidity'][siteLanguage]}: ${data.main.humidity}%`
    } catch (error) {
        console.log(error);
        weatherError.textContent = `Error! city not found for '${cityInput.value}'!`;
        temperature.textContent = '';
        weatherDescription.textContent = '';
        wind.textContent = '';
        humidity.textContent = ''
    }
}

const getLocalStorage = () => {
    localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
}

const getCity = () => {
    if (localStorage.getItem('city')) {
        cityInput.value = localStorage.getItem('city');
    }
}

const setCity = () => {
    localStorage.setItem('city', cityInput.value);
    getWeather();
}
window.addEventListener('beforeunload', setCity);

export { cityInput, getWeather, setCity }