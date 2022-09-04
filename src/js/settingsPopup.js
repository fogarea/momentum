// settings popup
const settingsLayout = document.querySelector('.settings');
const settingsBtn = document.querySelector('.settings-btn');
const languageButtons = document.querySelectorAll('.language-button');

let siteLanguage;

const getSettings = () => {
    getLocalStorage()
    settingsLayout.classList.remove('settings-hidden');
    settingsLayout.addEventListener('click', e => {
        if (e.target.classList.contains('settings')) {
            settingsLayout.classList.add('settings-hidden');
        }
    })

    for (let button of languageButtons) {
        if (button.classList.contains(`${siteLanguage}`)) {
            button.classList.add('active');
        }
    }
}

const getLocalStorage = () => {
    localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
}

export {settingsBtn, getSettings}