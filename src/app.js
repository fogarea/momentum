import './css/owfont-regular.css';
import './css/style.css';

import { playAudio, playNext, playPrev, playBtn, playNextBtn, playPrevBtn } from "./js/player.js";
import { prevButton, nextButton, backgroundButton, tagBtn, setBg, getSlideNext, getSlidePrev, makeApiButtonActive, getBackgroundTag } from "./js/background.js";
import { changeQuote, getQuotes } from "./js/quotes.js";
import { cityInput, getWeather, setCity } from "./js/weather.js";
import { showTime, getUsername } from "./js/greeting.js";
import { changeLanguagesBtn, changeUrlAddress, changeLanguage } from "./js/changeLanguage.js";
import { settingsBtn, getSettings } from "./js/settingsPopup.js";
import { todoBtn, getTodo, todoInput, todoInputHandler, todoList, todoInit } from "./js/todo.js";
import { initShow } from "./js/show.js";

//init
showTime();
setBg();
getQuotes();
getWeather();
window.addEventListener('load', initShow);
window.addEventListener('load', changeLanguage);
window.addEventListener('load', getUsername);
//weather listeners
cityInput.addEventListener('change', setCity);

// quotes listeners
changeQuote.addEventListener('click', getQuotes)

//player listeners
playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);

// bg slider listeners 
prevButton.addEventListener('click', getSlidePrev);
nextButton.addEventListener('click', getSlideNext);

// translation listeners
changeLanguagesBtn.addEventListener('click', e => changeUrlAddress(e));

// settings
// settings popup listener
settingsBtn.addEventListener("click", getSettings);

// todo
todoBtn.addEventListener("click", getTodo);

// create todo
todoInput.addEventListener('keypress', e => todoInputHandler(e));
todoList.addEventListener('click', e => todoInit(e))

// select API background settings listener
backgroundButton.addEventListener('click', e => makeApiButtonActive(e));

// submit selected API bg tag listener
tagBtn.addEventListener('click', getBackgroundTag)