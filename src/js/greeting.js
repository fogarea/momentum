const time = document.querySelector('.time');
const dateTag = document.querySelector('.date');
const greeting = document.querySelector('.greeting');
const username = document.querySelector('.name');

let siteLanguage;

// show greeting
const showGreeting = () => {
    //getUsername();
    const date = new Date();
    const hours = date.getHours();
    greeting.textContent = `${getTimeOfToday(hours)}`;
}
const getTimeOfToday = (hours, background) => {
    const namesOfDay = {
        0: {
            'en': 'Good night',
            'ru': 'Доброй ночи',
            'background': 'night',
        },
        1: {
            'en': 'Good morning',
            'ru': 'Доброе утро',
            'background': 'morning'
        },
        2: {
            'en': 'Good afternoon',
            'ru': 'Добрый день',
            'background': 'afternoon'
        },
        3: {
            'en': 'Good evening',
            'ru': 'Добрый вечер',
            'background': 'evening'
        },
    }
    return background ? namesOfDay[Math.floor(hours / 6)]['background'] : namesOfDay[Math.floor(hours / 6)][siteLanguage];
}

// show time and date
const showTime = () => {
    getLocalStorage();
    const date = new Date();
    const currentTime = date.toLocaleTimeString();
    //const currentTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
    time.textContent = currentTime;
    showDate();
    showGreeting();
    setTimeout(showTime, 100);
}

const showDate = () => {
    const date = new Date();
    const options = { weekday: "long", month: "long", day: "numeric" };
    const currentDate = date.toLocaleDateString(siteLanguage, options);
    dateTag.textContent = currentDate;
}


const getLocalStorage = () => {
    localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
}

const getUsername = () => {
    if (localStorage.getItem('name')) {
        username.value = localStorage.getItem('name');
    }
}

const setUsername = () => {
    localStorage.setItem('name', username.value);
}
window.addEventListener('beforeunload', setUsername);

export {showTime, getTimeOfToday, getUsername}