import {getRandomNum} from "./getRandomNum.js";

const changeQuote = document.querySelector('.change-quote');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

let siteLanguage;

// quotes
const getQuotes = async () => {
    getLocalStorage();
    try {
        const quotes = './assets/quotes.json';
        const res = await fetch(quotes);
        const data = await res.json();
        const key = getRandomNum(Object.keys(data).length, 1);
        quote.textContent = `"${data[key][`text-${siteLanguage}`]}"`;
        author.textContent = data[key][`author-${siteLanguage}`];
    } catch (error) {
        console.log(error);
    }
}

const getLocalStorage = () => {
    localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
}

export {changeQuote, getQuotes} 