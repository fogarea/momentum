import {getTimeOfToday} from "./greeting"
import {getRandomNum} from "./getRandomNum.js";
const body = document.querySelector('body');
const prevButton = document.querySelector('.slide-prev');
const nextButton = document.querySelector('.slide-next');
const backgroundButtons = document.querySelectorAll('.button-background');
const backgroundTags = document.querySelector('.background-tags__body');
const backgroundButton = document.querySelector('.background-buttons');
const tagBtn = document.querySelector('.tag-btn');
const labelInput = document.querySelector('.label__input');

let randomNum = Math.floor(Math.random() * (20 - 1) + 1);
let apiKey;
let backgroundTag;

// background
// API background
const getLinkToUnsplashImage = async () => {
    try {
        if(backgroundTag == ''){
            const date = new Date();
            const hours = date.getHours();
            backgroundTag = getTimeOfToday(hours, true);
            console.log('backgroundTag unspl', backgroundTag)
        }
        const url = `https://api.unsplash.com/photos/random?orientation=landscape&query=${backgroundTag}&client_id=YtH6DI4zofG12WYUe1XxQcMbPlgrF7Im_oogEOpuOUo`;
        const response = await fetch(url);
        const result = await response.json();
        const imageLink = result.urls.regular
        const img = new Image();
        img.src = imageLink;
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url('${imageLink}')`
        })
    } catch (error) {
        console.log(error)
    }
}

const getLinkToFlickrImage = async () => {
    try {
        if(backgroundTag == ''){
            const date = new Date();
            const hours = date.getHours();
            backgroundTag = getTimeOfToday(hours, true);
            console.log('backgroundTag flickr', backgroundTag)
        }
        const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8847b7120f7621b88777ec04be802f47&tags=${backgroundTag}&extras=url_l&format=json&nojsoncallback=1`
        const response = await fetch(url);
        const result = await response.json();
        const imageLink = result.photos.photo[getRandomNum(1, 100)].url_l
        const img = new Image();
        img.src = imageLink;
        img.addEventListener('load', () => {
            body.style.backgroundImage = `url('${imageLink}')`
        })
    } catch (error) {
        console.log(error)
    }
}

const getLinkToGithubImage = () => {
    const date = new Date();
    const hours = date.getHours();
    const timeOfDay = getTimeOfToday(hours, true);
    const img = new Image();
    img.src = `https://raw.githubusercontent.com/fogarea/stage1-tasks/assets/images/${timeOfDay}/${('0' + randomNum).slice(-2)}.jpg`;
    img.addEventListener('load', () => {
        body.style.backgroundImage = `url('https://raw.githubusercontent.com/fogarea/stage1-tasks/assets/images/${timeOfDay}/${('0' + randomNum).slice(-2)}.jpg')`;
    });
}

const setBg = () => {
    getLocalStorage();
    apiKey === 'github' ? getLinkToGithubImage() : apiKey === 'unsplash' ? getLinkToUnsplashImage() : getLinkToFlickrImage()
}

const getSlideNext = () => {
    randomNum === 20 ? randomNum = 1 : randomNum += 1;
    setBg();
}

const getSlidePrev = () => {
    randomNum === 1 ? randomNum = 20 : randomNum -= 1;
    setBg();
}

// select API background settings
const makeApiButtonActive = (e) => {
    for (let btn of backgroundButtons) {
        btn.classList.remove('active')
    }
    const makeActiveBtn = document.querySelector(`.${e.target.classList[1]}`);
    makeActiveBtn.classList.add('active');

    if(makeActiveBtn.classList.contains('github')){
        backgroundTags.classList.remove('show')
    }else {
        backgroundTags.classList.add('show');
        if(backgroundTag != undefined) labelInput.value = backgroundTag;
    } 
}

const getApiKey = () => {
    for (let btn of backgroundButtons) {
        if (btn.classList.contains('active')) {
            apiKey = btn.innerHTML;
        }
    }
}

const getBackgroundTag = () => {
    getApiKey();
    backgroundTag = document.querySelector(".label__input").value;
    localStorage.setItem('apiKey', apiKey)
    localStorage.setItem('backgroundTag', backgroundTag)

    setBg();
}

const setApiKey = () => {
    for (let btn of backgroundButtons) {
        btn.classList.remove('active');
        if (btn.innerHTML === apiKey) {
            btn.classList.add('active');
        }
    }
}



const getLocalStorage = () => {
    localStorage.getItem('apiKey') ? apiKey = localStorage.getItem('apiKey') : apiKey = 'github';

    if (localStorage.getItem('backgroundTag')) {
        backgroundTag = localStorage.getItem('backgroundTag');
    }

    setApiKey();
}

export {prevButton, nextButton, backgroundButton, tagBtn, setBg, getSlideNext, getSlidePrev, makeApiButtonActive, getBackgroundTag}