import language from './languages.js';
import { getQuotes } from "./quotes.js";
import { getWeather } from "./weather.js";

// translation
const changeLanguagesBtn = document.querySelector('.change-language');
const languageButtons = document.querySelectorAll('.language-button');

let siteLanguage;

const changeLanguage = () => {
    getLocalStorage();
    for (let key in language) {
        let keyExist = document.querySelector(`.${key}`);
        if (keyExist) {
            keyExist.innerHTML = language[key][siteLanguage];
            if (key === 'name' || key === 'label__input' || key === 'todo__input') keyExist.placeholder = language[key][siteLanguage];
        }
    }
}

const changeUrlAddress = (e) => {
    for (let button of languageButtons) {
        button.classList.remove('active');
    }
    e.target.classList.add('active');
    siteLanguage = (e.target.className).slice(0, 2);
    localStorage.setItem('siteLanguage', siteLanguage);
    location.href = window.location.pathname + '#' + siteLanguage;
    getWeather();
    getQuotes();
    changeLanguage();
}

const getLocalStorage = () => {
    localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
}
export { changeLanguagesBtn, changeUrlAddress, changeLanguage }