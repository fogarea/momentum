/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony import */ var _css_owfont_regular_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/owfont-regular.css */ "./src/css/owfont-regular.css");
    /* harmony import */ var _css_owfont_regular_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_owfont_regular_css__WEBPACK_IMPORTED_MODULE_0__);
    /* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/style.css */ "./src/css/style.css");
    /* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_style_css__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */ var _js_player_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/player.js */ "./src/js/player.js");
    /* harmony import */ var _js_background_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/background.js */ "./src/js/background.js");
    /* harmony import */ var _js_quotes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/quotes.js */ "./src/js/quotes.js");
    /* harmony import */ var _js_weather_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/weather.js */ "./src/js/weather.js");
    /* harmony import */ var _js_greeting_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/greeting.js */ "./src/js/greeting.js");
    /* harmony import */ var _js_changeLanguage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/changeLanguage.js */ "./src/js/changeLanguage.js");
    /* harmony import */ var _js_settingsPopup_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/settingsPopup.js */ "./src/js/settingsPopup.js");
    /* harmony import */ var _js_todo_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/todo.js */ "./src/js/todo.js");
    /* harmony import */ var _js_show_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./js/show.js */ "./src/js/show.js");
    
    
    
    
    
    
    
    
    
    
    
    
    
    //init
    Object(_js_greeting_js__WEBPACK_IMPORTED_MODULE_6__["showTime"])();
    Object(_js_background_js__WEBPACK_IMPORTED_MODULE_3__["setBg"])();
    Object(_js_quotes_js__WEBPACK_IMPORTED_MODULE_4__["getQuotes"])();
    Object(_js_weather_js__WEBPACK_IMPORTED_MODULE_5__["getWeather"])();
    window.addEventListener('load', _js_show_js__WEBPACK_IMPORTED_MODULE_10__["initShow"]);
    window.addEventListener('load', _js_changeLanguage_js__WEBPACK_IMPORTED_MODULE_7__["changeLanguage"]);
    window.addEventListener('load', _js_greeting_js__WEBPACK_IMPORTED_MODULE_6__["getUsername"]);
    //weather listeners
    _js_weather_js__WEBPACK_IMPORTED_MODULE_5__["cityInput"].addEventListener('change', _js_weather_js__WEBPACK_IMPORTED_MODULE_5__["setCity"]);
    
    // quotes listeners
    _js_quotes_js__WEBPACK_IMPORTED_MODULE_4__["changeQuote"].addEventListener('click', _js_quotes_js__WEBPACK_IMPORTED_MODULE_4__["getQuotes"])
    
    //player listeners
    _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playBtn"].addEventListener('click', _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playAudio"]);
    _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playNextBtn"].addEventListener('click', _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playNext"]);
    _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playPrevBtn"].addEventListener('click', _js_player_js__WEBPACK_IMPORTED_MODULE_2__["playPrev"]);
    
    // bg slider listeners 
    _js_background_js__WEBPACK_IMPORTED_MODULE_3__["prevButton"].addEventListener('click', _js_background_js__WEBPACK_IMPORTED_MODULE_3__["getSlidePrev"]);
    _js_background_js__WEBPACK_IMPORTED_MODULE_3__["nextButton"].addEventListener('click', _js_background_js__WEBPACK_IMPORTED_MODULE_3__["getSlideNext"]);
    
    // translation listeners
    _js_changeLanguage_js__WEBPACK_IMPORTED_MODULE_7__["changeLanguagesBtn"].addEventListener('click', e => Object(_js_changeLanguage_js__WEBPACK_IMPORTED_MODULE_7__["changeUrlAddress"])(e));
    
    // settings
    // settings popup listener
    _js_settingsPopup_js__WEBPACK_IMPORTED_MODULE_8__["settingsBtn"].addEventListener("click", _js_settingsPopup_js__WEBPACK_IMPORTED_MODULE_8__["getSettings"]);
    
    // todo
    _js_todo_js__WEBPACK_IMPORTED_MODULE_9__["todoBtn"].addEventListener("click", _js_todo_js__WEBPACK_IMPORTED_MODULE_9__["getTodo"]);
    
    // create todo
    _js_todo_js__WEBPACK_IMPORTED_MODULE_9__["todoInput"].addEventListener('keypress', e => Object(_js_todo_js__WEBPACK_IMPORTED_MODULE_9__["todoInputHandler"])(e));
    _js_todo_js__WEBPACK_IMPORTED_MODULE_9__["todoList"].addEventListener('click', e => Object(_js_todo_js__WEBPACK_IMPORTED_MODULE_9__["todoInit"])(e))
    
    // select API background settings listener
    _js_background_js__WEBPACK_IMPORTED_MODULE_3__["backgroundButton"].addEventListener('click', e => Object(_js_background_js__WEBPACK_IMPORTED_MODULE_3__["makeApiButtonActive"])(e));
    
    // submit selected API bg tag listener
    _js_background_js__WEBPACK_IMPORTED_MODULE_3__["tagBtn"].addEventListener('click', _js_background_js__WEBPACK_IMPORTED_MODULE_3__["getBackgroundTag"])
    
    /***/ }),
    
    /***/ "./src/css/owfont-regular.css":
    /*!************************************!*\
      !*** ./src/css/owfont-regular.css ***!
      \************************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
    
    /***/ }),
    
    /***/ "./src/css/style.css":
    /*!***************************!*\
      !*** ./src/css/style.css ***!
      \***************************/
    /*! no static exports found */
    /***/ (function(module, exports, __webpack_require__) {
    
    // extracted by mini-css-extract-plugin
    
    /***/ }),
    
    /***/ "./src/js/background.js":
    /*!******************************!*\
      !*** ./src/js/background.js ***!
      \******************************/
    /*! exports provided: prevButton, nextButton, backgroundButton, tagBtn, setBg, getSlideNext, getSlidePrev, makeApiButtonActive, getBackgroundTag */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "prevButton", function() { return prevButton; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextButton", function() { return nextButton; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "backgroundButton", function() { return backgroundButton; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tagBtn", function() { return tagBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setBg", function() { return setBg; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlideNext", function() { return getSlideNext; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSlidePrev", function() { return getSlidePrev; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "makeApiButtonActive", function() { return makeApiButtonActive; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundTag", function() { return getBackgroundTag; });
    /* harmony import */ var _greeting__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting */ "./src/js/greeting.js");
    /* harmony import */ var _getRandomNum_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getRandomNum.js */ "./src/js/getRandomNum.js");
    
    
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
                backgroundTag = Object(_greeting__WEBPACK_IMPORTED_MODULE_0__["getTimeOfToday"])(hours, true);
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
                backgroundTag = Object(_greeting__WEBPACK_IMPORTED_MODULE_0__["getTimeOfToday"])(hours, true);
                console.log('backgroundTag flickr', backgroundTag)
            }
            const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=8847b7120f7621b88777ec04be802f47&tags=${backgroundTag}&extras=url_l&format=json&nojsoncallback=1`
            const response = await fetch(url);
            const result = await response.json();
            const imageLink = result.photos.photo[Object(_getRandomNum_js__WEBPACK_IMPORTED_MODULE_1__["getRandomNum"])(1, 100)].url_l
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
        const timeOfDay = Object(_greeting__WEBPACK_IMPORTED_MODULE_0__["getTimeOfToday"])(hours, true);
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
    
    
    
    /***/ }),
    
    /***/ "./src/js/changeLanguage.js":
    /*!**********************************!*\
      !*** ./src/js/changeLanguage.js ***!
      \**********************************/
    /*! exports provided: changeLanguagesBtn, changeUrlAddress, changeLanguage */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguagesBtn", function() { return changeLanguagesBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeUrlAddress", function() { return changeUrlAddress; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLanguage", function() { return changeLanguage; });
    /* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages.js */ "./src/js/languages.js");
    /* harmony import */ var _quotes_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quotes.js */ "./src/js/quotes.js");
    /* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weather.js */ "./src/js/weather.js");
    
    
    
    
    // translation
    const changeLanguagesBtn = document.querySelector('.change-language');
    const languageButtons = document.querySelectorAll('.language-button');
    
    let siteLanguage;
    
    const changeLanguage = () => {
        getLocalStorage();
        for (let key in _languages_js__WEBPACK_IMPORTED_MODULE_0__["default"]) {
            let keyExist = document.querySelector(`.${key}`);
            if (keyExist) {
                keyExist.innerHTML = _languages_js__WEBPACK_IMPORTED_MODULE_0__["default"][key][siteLanguage];
                if (key === 'name' || key === 'label__input' || key === 'todo__input') keyExist.placeholder = _languages_js__WEBPACK_IMPORTED_MODULE_0__["default"][key][siteLanguage];
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
        Object(_weather_js__WEBPACK_IMPORTED_MODULE_2__["getWeather"])();
        Object(_quotes_js__WEBPACK_IMPORTED_MODULE_1__["getQuotes"])();
        changeLanguage();
    }
    
    const getLocalStorage = () => {
        localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
    }
    
    
    /***/ }),
    
    /***/ "./src/js/getRandomNum.js":
    /*!********************************!*\
      !*** ./src/js/getRandomNum.js ***!
      \********************************/
    /*! exports provided: getRandomNum */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRandomNum", function() { return getRandomNum; });
    const getRandomNum = (max, min) => {
        return Math.floor(Math.random() * (max - min) + min);
    }
    
    /***/ }),
    
    /***/ "./src/js/greeting.js":
    /*!****************************!*\
      !*** ./src/js/greeting.js ***!
      \****************************/
    /*! exports provided: showTime, getTimeOfToday, getUsername */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showTime", function() { return showTime; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTimeOfToday", function() { return getTimeOfToday; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsername", function() { return getUsername; });
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
    
    
    
    /***/ }),
    
    /***/ "./src/js/languages.js":
    /*!*****************************!*\
      !*** ./src/js/languages.js ***!
      \*****************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    const language = {
        'en': {
            'en': 'en',
            'ru': 'англ',
        },
        'ru': {
            'en': 'ru',
            'ru': 'рус',
        },
        'name': {
            'en': '[Enter name]',
            'ru': '[Введите имя]',
        },
        'Wind speed': {
            'en': 'Wind speed',
            'ru': 'Скорость ветра',
        },
        'Humidity': {
            'en': 'Humidity',
            'ru': 'Влажность',
        },
        'settings-title': {
            'en': 'Settings',
            'ru': 'Настройки',
        },
        'show-title': {
            'en': 'Show',
            'ru': 'Показать',
        },
        'player-text': {
            'en': 'Player',
            'ru': 'Плеер',
        },
        'settings-weather-text': {
            'en': 'Weather',
            'ru': 'Погода',
        },
        'settings-quotes-text': {
            'en': 'Quote',
            'ru': 'Цитаты',
        },
        'settings-clocks-text': {
            'en': 'Time',
            'ru': 'Часы',
        },
        'settings-date-text': {
            'en': 'Date',
            'ru': 'Дата',
        },
        'settings-greeting-text': {
            'en': 'Greeting',
            'ru': 'Приветствие',
        },
        'background-title': {
            'en': 'Background',
            'ru': 'Фоновое изображение',
        },
        'background-subtitle': {
            'en': 'Select the background source',
            'ru': 'Выберите источник фонового изображения',
        },
        'label__input': {
            'en': 'Enter background tag',
            'ru': 'Введите тег',
        },
        'tag-btn': {
            'en': 'Submit',
            'ru': 'Подтвердить',
        },
        'language-title': {
            'en': 'Change Language',
            'ru': 'Изменить язык',
        },
        'todo-tittle': {
            'en': 'Todo',
            'ru': 'Заметки',
        },
        'todo__input': {
            'en': 'New Todo',
            'ru': 'Введите заметку',
        },
    }
    /* harmony default export */ __webpack_exports__["default"] = (language);
    
    /***/ }),
    
    /***/ "./src/js/playList.js":
    /*!****************************!*\
      !*** ./src/js/playList.js ***!
      \****************************/
    /*! exports provided: default */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    const playList = [
        {
            title: 'Aqua Caelestis',
            src: './assets/sounds/Aqua Caelestis.mp3',
            duration: '00:40',
            seconds: '40',
        },
        {
            title: 'River Flows In You',
            src: './assets/sounds/River Flows In You.mp3',
            duration: '01:37',
            seconds: '97',
        },
        {
            title: 'Summer Wind',
            src: './assets/sounds/Summer Wind.mp3',
            duration: '01:51',
            seconds: '111',
        },
        {
            title: 'Ennio Morricone',
            src: './assets/sounds/Ennio Morricone.mp3',
            duration: '01:37',
            seconds: '97',
        },
    ]
    /* harmony default export */ __webpack_exports__["default"] = (playList);
    
    /***/ }),
    
    /***/ "./src/js/player.js":
    /*!**************************!*\
      !*** ./src/js/player.js ***!
      \**************************/
    /*! exports provided: playBtn, playNextBtn, playPrevBtn, playAudio, playNext, playPrev */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playBtn", function() { return playBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playNextBtn", function() { return playNextBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPrevBtn", function() { return playPrevBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playAudio", function() { return playAudio; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playNext", function() { return playNext; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "playPrev", function() { return playPrev; });
    /* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ "./src/js/playList.js");
    
    
    const timeline = document.querySelector('.timeline');
    const timelineProgress = document.querySelector('.progress');
    const currentTime = document.querySelector('.current');
    const volume = document.querySelector('.volume');
    const volumeSlider = document.querySelector('.volume-slider');
    const volumePersentage = document.querySelector('.volume-percentage');
    const trackTitle = document.querySelector('.track-title');
    const duration = document.querySelector('.length');
    const audio = new Audio();
    
    const playBtn = document.querySelector('.play');
    const playNextBtn = document.querySelector('.play-next');
    const playPrevBtn = document.querySelector('.play-prev');
    
    let isPlay = false;
    let playNum = 0;
    let previousClick;
    
    //player 
    const playlistSongs = document.querySelector('.play-list');
    _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"].forEach(el => {
        const liPlayItem = document.createElement('li');
        liPlayItem.classList.add('play-item')
        liPlayItem.textContent = el.title;
        playlistSongs.append(liPlayItem);
    });
    
    const songsList = document.querySelectorAll('.play-item');
    const playAudio = () => {
        if (!isPlay) {
            togglePlayButton();
            duration.textContent = _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].duration;
            trackTitle.textContent = _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].title;
            audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].src;
            audio.currentTime = 0;
            audio.play();
            songsList.forEach(el => {
                el.classList.remove('play-item-active');
                el.classList.remove('playing-item');
            })
            songsList[playNum].classList.add('play-item-active');
            songsList[playNum].classList.add('playing-item');
            previousClick = document.querySelector('.playing-item');
            isPlay = true;
        } else {
            togglePlayButton();
            songsList[playNum].classList.remove('playing-item');
            previousClick = document.querySelector('.playing-item');
            isPlay = false;
            audio.pause();
        }
    }
    
    // start playing on click on song in playlist
    const playlist = document.querySelector('.play-list');
    playlist.addEventListener('click', e => {
        const element = e.target;
        for (const el in songsList) {
            if (element.innerHTML === songsList[el].innerHTML) {
                playNum = parseInt(el);
                break;
            }
        }
        if (previousClick === element) {
            isPlay = true;
            playAudio();
        } else {
            isPlay = false;
            playAudio();
        }
    })
    
    timeline.addEventListener('click', e => {
        const timelineWidth = window.getComputedStyle(timeline).width;
        const timeToSeek = e.offsetX / parseInt(timelineWidth) * _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].seconds;
        audio.currentTime = timeToSeek;
    })
    
    volume.addEventListener('click', () => {
        audio.muted = !audio.muted;
        audio.muted ? volume.classList.replace('volume-up', 'volume-mute') : volume.classList.replace('volume-mute', 'volume-up');
    })
    
    volumeSlider.addEventListener('click', e => {
        const volumeWidth = window.getComputedStyle(volumeSlider).width;
        const volumeLevel = e.offsetX / (parseInt(volumeWidth) / 100);
        volumePersentage.style.width = volumeLevel + '%';
        audio.volume = `0.${volumeLevel}`;
    })
    
    setInterval(() => {
        timelineProgress.style.width = audio.currentTime / _playList_js__WEBPACK_IMPORTED_MODULE_0__["default"][playNum].seconds * 100 + '%';
        currentTime.textContent = getTimeCode(audio.currentTime);
    }, 500);
    
    const getTimeCode = num => {
        let seconds = parseInt(num);
        let minutes = parseInt(seconds / 60);
        seconds -= minutes * 60;
        return `${minutes}:${String('0' + seconds % 60).slice(-2)}`;
    }
    
    const togglePlayButton = () => {
        isPlay === false ? playBtn.classList.add('pause') : playBtn.classList.remove('pause')
    }
    
    const playNext = () => {
        playNum === Object.keys(_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"]).length - 1 ? playNum = 0 : playNum += 1;
        isPlay = false;
        playAudio();
    }
    
    const playPrev = () => {
        playNum === 0 ? playNum = Object.keys(_playList_js__WEBPACK_IMPORTED_MODULE_0__["default"]).length - 1 : playNum -= 1;
        isPlay = false;
        playAudio();
    }
    
    audio.addEventListener('ended', () => playNext());
    
    playBtn.addEventListener('click', playAudio);
    playNextBtn.addEventListener('click', playNext);
    playPrevBtn.addEventListener('click', playPrev);
    
    /***/ }),
    
    /***/ "./src/js/quotes.js":
    /*!**************************!*\
      !*** ./src/js/quotes.js ***!
      \**************************/
    /*! exports provided: changeQuote, getQuotes */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeQuote", function() { return changeQuote; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuotes", function() { return getQuotes; });
    /* harmony import */ var _getRandomNum_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getRandomNum.js */ "./src/js/getRandomNum.js");
    
    
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
            const key = Object(_getRandomNum_js__WEBPACK_IMPORTED_MODULE_0__["getRandomNum"])(Object.keys(data).length, 1);
            quote.textContent = `"${data[key][`text-${siteLanguage}`]}"`;
            author.textContent = data[key][`author-${siteLanguage}`];
        } catch (error) {
            console.log(error);
        }
    }
    
    const getLocalStorage = () => {
        localStorage.getItem('siteLanguage') ? siteLanguage = localStorage.getItem('siteLanguage') : siteLanguage = 'en';
    }
    
     
    
    /***/ }),
    
    /***/ "./src/js/settingsPopup.js":
    /*!*********************************!*\
      !*** ./src/js/settingsPopup.js ***!
      \*********************************/
    /*! exports provided: settingsBtn, getSettings */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settingsBtn", function() { return settingsBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSettings", function() { return getSettings; });
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
    
    
    
    /***/ }),
    
    /***/ "./src/js/show.js":
    /*!************************!*\
      !*** ./src/js/show.js ***!
      \************************/
    /*! exports provided: initShow */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initShow", function() { return initShow; });
    const formFields = document.querySelectorAll('.show-check')
    formFields.forEach(item => {
        item.addEventListener('change', e => {
            localStorage.setItem(e.target.name, e.target.checked);
            showBlock();
        });
    });
    
    const blocks = {
        'player': 'player',
        'weather': 'weather',
        'quotes': 'quotes',
        'time': 'time',
        'date': 'date',
        'greeting-container': 'greeting-container',
    }
    
    const showBlock = () => {
        for (let key in blocks) {
            JSON.parse(localStorage.getItem(blocks[key])) === true ? document.querySelector(`.${blocks[key]}`).classList.remove('show') : document.querySelector(`.${blocks[key]}`).classList.add('show');
        }
    }
    
    const initShow = () => {
        formFields.forEach(el => {
            el.checked = JSON.parse(localStorage.getItem(el.name));
            showBlock();
        })
    }
    
    
    
    /***/ }),
    
    /***/ "./src/js/todo.js":
    /*!************************!*\
      !*** ./src/js/todo.js ***!
      \************************/
    /*! exports provided: todoBtn, getTodo, todoInput, todoInputHandler, todoList, todoInit */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoBtn", function() { return todoBtn; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTodo", function() { return getTodo; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoInput", function() { return todoInput; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoInputHandler", function() { return todoInputHandler; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoList", function() { return todoList; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todoInit", function() { return todoInit; });
    const todoBtn = document.querySelector('.todo-btn');
    const todoLayout = document.querySelector('.todo');
    const todoInput = document.querySelector('.todo__input');
    const todoList = document.querySelector('.todo-list');
    const formFields = document.querySelectorAll('.show-check')
    
    
    
    const getTodo = () => {
        todoLayout.classList.remove('todo-hidden');
        todoLayout.addEventListener('click', e => {
            if (e.target.classList.contains('todo')) {
                todoLayout.classList.add('todo-hidden');
            }
        })
    }
    
    const todoObject = {};
    
    const todoInputHandler = (e) => {
        if (e.key === "Enter") {
            const liTodoItem = document.createElement('li');
            liTodoItem.classList.add('todo-list__item');
    
            const checkItem = document.createElement('input');
            checkItem.type = "checkbox";
            //checkItem.name = 'name';
            checkItem.classList.add('todo-list__item-check');
            //const randId = getRandomNum(100, 0);
            //checkItem.id = `${randId}`;
            checkItem.checked = false;
            checkItem.name = `${todoInput.value}`;
    
            const label = document.createElement('label');
            //label.htmlFor = `${randId}`;
            label.classList.add('todo-list__item-label')
            label.appendChild(document.createTextNode(`${checkItem.name}`));
    
            const btn = document.createElement('button');
            btn.classList.add('todo-list__item-btn');
            btn.name = `${todoInput.value}`;
    
            liTodoItem.appendChild(checkItem);
            liTodoItem.appendChild(label);
            liTodoItem.appendChild(btn);
    
            todoList.appendChild(liTodoItem);
    
            if (!(checkItem.name in todoObject)) todoObject[checkItem.name] = checkItem.checked;
    
            todoInput.value = '';
        }
        todoItemDelete();
    
    }
    
    const todoInit = (e) => {
            if (e.target.name != 'undefined') todoObject[e.target.name] = e.target.checked;
    }
    
    const setTodoItem = () => {
        for (let key in todoObject) {
            const liTodoItem = document.createElement('li');
            liTodoItem.classList.add('todo-list__item');
    
            const checkItem = document.createElement('input');
            checkItem.type = "checkbox";
            checkItem.classList.add('todo-list__item-check');
            checkItem.checked = todoObject[key];
            checkItem.name = key;
    
            const label = document.createElement('label');
            label.classList.add('todo-list__item-label')
            label.appendChild(document.createTextNode(`${key}`));
    
            const btn = document.createElement('button');
            btn.classList.add('todo-list__item-btn');
            btn.name = key;
    
            liTodoItem.appendChild(checkItem);
            liTodoItem.appendChild(label);
            liTodoItem.appendChild(btn);
    
            todoList.appendChild(liTodoItem);
        }
        todoItemDelete()
    }
    
    const todoItemDelete = () => {
        document.querySelectorAll('.todo-list__item-btn').forEach(btn => {
            btn.addEventListener('click', e => {
                e.target.parentNode.remove();
                delete todoObject[e.target.name]
            });
        });
    }
    
    const getLocalStorage = () => {
        if (localStorage.getItem('todoObject')) {
            Object.assign(todoObject, JSON.parse(localStorage.getItem('todoObject')));
            setTodoItem();
        }
       
    }
    window.addEventListener('load', getLocalStorage);
    
    const setLocalStorage = () => {
        localStorage.setItem('todoObject', JSON.stringify(todoObject));
    }
    window.addEventListener('beforeunload', setLocalStorage);
    
    
    
    /***/ }),
    
    /***/ "./src/js/weather.js":
    /*!***************************!*\
      !*** ./src/js/weather.js ***!
      \***************************/
    /*! exports provided: cityInput, getWeather, setCity */
    /***/ (function(module, __webpack_exports__, __webpack_require__) {
    
    "use strict";
    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cityInput", function() { return cityInput; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getWeather", function() { return getWeather; });
    /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCity", function() { return setCity; });
    /* harmony import */ var _languages_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./languages.js */ "./src/js/languages.js");
    
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
            wind.textContent = `${_languages_js__WEBPACK_IMPORTED_MODULE_0__["default"]['Wind speed'][siteLanguage]}: ${Math.floor(data.wind.speed)} ${siteLanguage == 'en' ? 'm/s' : 'м/с'}`;
            humidity.textContent = `${_languages_js__WEBPACK_IMPORTED_MODULE_0__["default"]['Humidity'][siteLanguage]}: ${data.main.humidity}%`
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
    
    
    
    /***/ })
    
    /******/ });
    //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL293Zm9udC1yZWd1bGFyLmNzcz9lZjZkIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUuY3NzPzZiN2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2JhY2tncm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2NoYW5nZUxhbmd1YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9nZXRSYW5kb21OdW0uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2dyZWV0aW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9sYW5ndWFnZXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3BsYXlMaXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3F1b3Rlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2V0dGluZ3NQb3B1cC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvc2hvdy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvdG9kby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvanMvd2VhdGhlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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Q0E7QUFDQSx5RUFBeUUsZ0JBQWdCLFFBQVEsYUFBYTtBQUM5RztBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMsbUJBQW1CO0FBQzVEO0FBQ0EscUNBQXFDLDJCQUEyQjtBQUNoRTtBQUNBLDhCQUE4QixxREFBUSw2QkFBNkIsSUFBSSw0QkFBNEIsR0FBRyxxQ0FBcUM7QUFDM0ksa0NBQWtDLHFEQUFRLDJCQUEyQixJQUFJLG1CQUFtQjtBQUM1RixLQUFLO0FBQ0w7QUFDQSxpRUFBaUUsZ0JBQWdCO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9hcHAuanNcIik7XG4iLCJpbXBvcnQgJy4vY3NzL293Zm9udC1yZWd1bGFyLmNzcyc7XG5pbXBvcnQgJy4vY3NzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCB7IHBsYXlBdWRpbywgcGxheU5leHQsIHBsYXlQcmV2LCBwbGF5QnRuLCBwbGF5TmV4dEJ0biwgcGxheVByZXZCdG4gfSBmcm9tIFwiLi9qcy9wbGF5ZXIuanNcIjtcbmltcG9ydCB7IHByZXZCdXR0b24sIG5leHRCdXR0b24sIGJhY2tncm91bmRCdXR0b24sIHRhZ0J0biwgc2V0QmcsIGdldFNsaWRlTmV4dCwgZ2V0U2xpZGVQcmV2LCBtYWtlQXBpQnV0dG9uQWN0aXZlLCBnZXRCYWNrZ3JvdW5kVGFnIH0gZnJvbSBcIi4vanMvYmFja2dyb3VuZC5qc1wiO1xuaW1wb3J0IHsgY2hhbmdlUXVvdGUsIGdldFF1b3RlcyB9IGZyb20gXCIuL2pzL3F1b3Rlcy5qc1wiO1xuaW1wb3J0IHsgY2l0eUlucHV0LCBnZXRXZWF0aGVyLCBzZXRDaXR5IH0gZnJvbSBcIi4vanMvd2VhdGhlci5qc1wiO1xuaW1wb3J0IHsgc2hvd1RpbWUsIGdldFVzZXJuYW1lIH0gZnJvbSBcIi4vanMvZ3JlZXRpbmcuanNcIjtcbmltcG9ydCB7IGNoYW5nZUxhbmd1YWdlc0J0biwgY2hhbmdlVXJsQWRkcmVzcywgY2hhbmdlTGFuZ3VhZ2UgfSBmcm9tIFwiLi9qcy9jaGFuZ2VMYW5ndWFnZS5qc1wiO1xuaW1wb3J0IHsgc2V0dGluZ3NCdG4sIGdldFNldHRpbmdzIH0gZnJvbSBcIi4vanMvc2V0dGluZ3NQb3B1cC5qc1wiO1xuaW1wb3J0IHsgdG9kb0J0biwgZ2V0VG9kbywgdG9kb0lucHV0LCB0b2RvSW5wdXRIYW5kbGVyLCB0b2RvTGlzdCwgdG9kb0luaXQgfSBmcm9tIFwiLi9qcy90b2RvLmpzXCI7XG5pbXBvcnQgeyBpbml0U2hvdyB9IGZyb20gXCIuL2pzL3Nob3cuanNcIjtcblxuLy9pbml0XG5zaG93VGltZSgpO1xuc2V0QmcoKTtcbmdldFF1b3RlcygpO1xuZ2V0V2VhdGhlcigpO1xud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBpbml0U2hvdyk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsIGNoYW5nZUxhbmd1YWdlKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgZ2V0VXNlcm5hbWUpO1xuLy93ZWF0aGVyIGxpc3RlbmVyc1xuY2l0eUlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHNldENpdHkpO1xuXG4vLyBxdW90ZXMgbGlzdGVuZXJzXG5jaGFuZ2VRdW90ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGdldFF1b3RlcylcblxuLy9wbGF5ZXIgbGlzdGVuZXJzXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUF1ZGlvKTtcbnBsYXlOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheU5leHQpO1xucGxheVByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UHJldik7XG5cbi8vIGJnIHNsaWRlciBsaXN0ZW5lcnMgXG5wcmV2QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0U2xpZGVQcmV2KTtcbm5leHRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBnZXRTbGlkZU5leHQpO1xuXG4vLyB0cmFuc2xhdGlvbiBsaXN0ZW5lcnNcbmNoYW5nZUxhbmd1YWdlc0J0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4gY2hhbmdlVXJsQWRkcmVzcyhlKSk7XG5cbi8vIHNldHRpbmdzXG4vLyBzZXR0aW5ncyBwb3B1cCBsaXN0ZW5lclxuc2V0dGluZ3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGdldFNldHRpbmdzKTtcblxuLy8gdG9kb1xudG9kb0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZ2V0VG9kbyk7XG5cbi8vIGNyZWF0ZSB0b2RvXG50b2RvSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBlID0+IHRvZG9JbnB1dEhhbmRsZXIoZSkpO1xudG9kb0xpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHRvZG9Jbml0KGUpKVxuXG4vLyBzZWxlY3QgQVBJIGJhY2tncm91bmQgc2V0dGluZ3MgbGlzdGVuZXJcbmJhY2tncm91bmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IG1ha2VBcGlCdXR0b25BY3RpdmUoZSkpO1xuXG4vLyBzdWJtaXQgc2VsZWN0ZWQgQVBJIGJnIHRhZyBsaXN0ZW5lclxudGFnQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZ2V0QmFja2dyb3VuZFRhZykiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQge2dldFRpbWVPZlRvZGF5fSBmcm9tIFwiLi9ncmVldGluZ1wiXG5pbXBvcnQge2dldFJhbmRvbU51bX0gZnJvbSBcIi4vZ2V0UmFuZG9tTnVtLmpzXCI7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuY29uc3QgcHJldkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zbGlkZS1wcmV2Jyk7XG5jb25zdCBuZXh0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNsaWRlLW5leHQnKTtcbmNvbnN0IGJhY2tncm91bmRCdXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1dHRvbi1iYWNrZ3JvdW5kJyk7XG5jb25zdCBiYWNrZ3JvdW5kVGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYWNrZ3JvdW5kLXRhZ3NfX2JvZHknKTtcbmNvbnN0IGJhY2tncm91bmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYmFja2dyb3VuZC1idXR0b25zJyk7XG5jb25zdCB0YWdCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFnLWJ0bicpO1xuY29uc3QgbGFiZWxJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sYWJlbF9faW5wdXQnKTtcblxubGV0IHJhbmRvbU51bSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqICgyMCAtIDEpICsgMSk7XG5sZXQgYXBpS2V5O1xubGV0IGJhY2tncm91bmRUYWc7XG5cbi8vIGJhY2tncm91bmRcbi8vIEFQSSBiYWNrZ3JvdW5kXG5jb25zdCBnZXRMaW5rVG9VbnNwbGFzaEltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmKGJhY2tncm91bmRUYWcgPT0gJycpe1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRUYWcgPSBnZXRUaW1lT2ZUb2RheShob3VycywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmFja2dyb3VuZFRhZyB1bnNwbCcsIGJhY2tncm91bmRUYWcpXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLnVuc3BsYXNoLmNvbS9waG90b3MvcmFuZG9tP29yaWVudGF0aW9uPWxhbmRzY2FwZSZxdWVyeT0ke2JhY2tncm91bmRUYWd9JmNsaWVudF9pZD1ZdEg2REk0em9mRzEyV1lVZTFYeFFjTWJQbGdyRjdJbV9vb2dFT3B1T1VvYDtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGltYWdlTGluayA9IHJlc3VsdC51cmxzLnJlZ3VsYXJcbiAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgICAgIGltZy5zcmMgPSBpbWFnZUxpbms7XG4gICAgICAgIGltZy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICAgICAgICAgICAgYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke2ltYWdlTGlua30nKWBcbiAgICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcilcbiAgICB9XG59XG5cbmNvbnN0IGdldExpbmtUb0ZsaWNrckltYWdlID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICAgIGlmKGJhY2tncm91bmRUYWcgPT0gJycpe1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICAgICAgICAgIGJhY2tncm91bmRUYWcgPSBnZXRUaW1lT2ZUb2RheShob3VycywgdHJ1ZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYmFja2dyb3VuZFRhZyBmbGlja3InLCBiYWNrZ3JvdW5kVGFnKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHVybCA9IGBodHRwczovL3d3dy5mbGlja3IuY29tL3NlcnZpY2VzL3Jlc3QvP21ldGhvZD1mbGlja3IucGhvdG9zLnNlYXJjaCZhcGlfa2V5PTg4NDdiNzEyMGY3NjIxYjg4Nzc3ZWMwNGJlODAyZjQ3JnRhZ3M9JHtiYWNrZ3JvdW5kVGFnfSZleHRyYXM9dXJsX2wmZm9ybWF0PWpzb24mbm9qc29uY2FsbGJhY2s9MWBcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGNvbnN0IGltYWdlTGluayA9IHJlc3VsdC5waG90b3MucGhvdG9bZ2V0UmFuZG9tTnVtKDEsIDEwMCldLnVybF9sXG4gICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWcuc3JjID0gaW1hZ2VMaW5rO1xuICAgICAgICBpbWcuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtpbWFnZUxpbmt9JylgXG4gICAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpXG4gICAgfVxufVxuXG5jb25zdCBnZXRMaW5rVG9HaXRodWJJbWFnZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBjb25zdCB0aW1lT2ZEYXkgPSBnZXRUaW1lT2ZUb2RheShob3VycywgdHJ1ZSk7XG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XG4gICAgaW1nLnNyYyA9IGBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vZm9nYXJlYS9zdGFnZTEtdGFza3MvYXNzZXRzL2ltYWdlcy8ke3RpbWVPZkRheX0vJHsoJzAnICsgcmFuZG9tTnVtKS5zbGljZSgtMil9LmpwZ2A7XG4gICAgaW1nLmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gICAgICAgIGJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2ZvZ2FyZWEvc3RhZ2UxLXRhc2tzL2Fzc2V0cy9pbWFnZXMvJHt0aW1lT2ZEYXl9LyR7KCcwJyArIHJhbmRvbU51bSkuc2xpY2UoLTIpfS5qcGcnKWA7XG4gICAgfSk7XG59XG5cbmNvbnN0IHNldEJnID0gKCkgPT4ge1xuICAgIGdldExvY2FsU3RvcmFnZSgpO1xuICAgIGFwaUtleSA9PT0gJ2dpdGh1YicgPyBnZXRMaW5rVG9HaXRodWJJbWFnZSgpIDogYXBpS2V5ID09PSAndW5zcGxhc2gnID8gZ2V0TGlua1RvVW5zcGxhc2hJbWFnZSgpIDogZ2V0TGlua1RvRmxpY2tySW1hZ2UoKVxufVxuXG5jb25zdCBnZXRTbGlkZU5leHQgPSAoKSA9PiB7XG4gICAgcmFuZG9tTnVtID09PSAyMCA/IHJhbmRvbU51bSA9IDEgOiByYW5kb21OdW0gKz0gMTtcbiAgICBzZXRCZygpO1xufVxuXG5jb25zdCBnZXRTbGlkZVByZXYgPSAoKSA9PiB7XG4gICAgcmFuZG9tTnVtID09PSAxID8gcmFuZG9tTnVtID0gMjAgOiByYW5kb21OdW0gLT0gMTtcbiAgICBzZXRCZygpO1xufVxuXG4vLyBzZWxlY3QgQVBJIGJhY2tncm91bmQgc2V0dGluZ3NcbmNvbnN0IG1ha2VBcGlCdXR0b25BY3RpdmUgPSAoZSkgPT4ge1xuICAgIGZvciAobGV0IGJ0biBvZiBiYWNrZ3JvdW5kQnV0dG9ucykge1xuICAgICAgICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcbiAgICB9XG4gICAgY29uc3QgbWFrZUFjdGl2ZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2UudGFyZ2V0LmNsYXNzTGlzdFsxXX1gKTtcbiAgICBtYWtlQWN0aXZlQnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuXG4gICAgaWYobWFrZUFjdGl2ZUJ0bi5jbGFzc0xpc3QuY29udGFpbnMoJ2dpdGh1YicpKXtcbiAgICAgICAgYmFja2dyb3VuZFRhZ3MuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpXG4gICAgfWVsc2Uge1xuICAgICAgICBiYWNrZ3JvdW5kVGFncy5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG4gICAgICAgIGlmKGJhY2tncm91bmRUYWcgIT0gdW5kZWZpbmVkKSBsYWJlbElucHV0LnZhbHVlID0gYmFja2dyb3VuZFRhZztcbiAgICB9IFxufVxuXG5jb25zdCBnZXRBcGlLZXkgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgYnRuIG9mIGJhY2tncm91bmRCdXR0b25zKSB7XG4gICAgICAgIGlmIChidG4uY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgYXBpS2V5ID0gYnRuLmlubmVySFRNTDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZ2V0QmFja2dyb3VuZFRhZyA9ICgpID0+IHtcbiAgICBnZXRBcGlLZXkoKTtcbiAgICBiYWNrZ3JvdW5kVGFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sYWJlbF9faW5wdXRcIikudmFsdWU7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2FwaUtleScsIGFwaUtleSlcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnYmFja2dyb3VuZFRhZycsIGJhY2tncm91bmRUYWcpXG5cbiAgICBzZXRCZygpO1xufVxuXG5jb25zdCBzZXRBcGlLZXkgPSAoKSA9PiB7XG4gICAgZm9yIChsZXQgYnRuIG9mIGJhY2tncm91bmRCdXR0b25zKSB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgaWYgKGJ0bi5pbm5lckhUTUwgPT09IGFwaUtleSkge1xuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcGlLZXknKSA/IGFwaUtleSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdhcGlLZXknKSA6IGFwaUtleSA9ICdnaXRodWInO1xuXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYWNrZ3JvdW5kVGFnJykpIHtcbiAgICAgICAgYmFja2dyb3VuZFRhZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdiYWNrZ3JvdW5kVGFnJyk7XG4gICAgfVxuXG4gICAgc2V0QXBpS2V5KCk7XG59XG5cbmV4cG9ydCB7cHJldkJ1dHRvbiwgbmV4dEJ1dHRvbiwgYmFja2dyb3VuZEJ1dHRvbiwgdGFnQnRuLCBzZXRCZywgZ2V0U2xpZGVOZXh0LCBnZXRTbGlkZVByZXYsIG1ha2VBcGlCdXR0b25BY3RpdmUsIGdldEJhY2tncm91bmRUYWd9IiwiaW1wb3J0IGxhbmd1YWdlIGZyb20gJy4vbGFuZ3VhZ2VzLmpzJztcbmltcG9ydCB7IGdldFF1b3RlcyB9IGZyb20gXCIuL3F1b3Rlcy5qc1wiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL3dlYXRoZXIuanNcIjtcblxuLy8gdHJhbnNsYXRpb25cbmNvbnN0IGNoYW5nZUxhbmd1YWdlc0J0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtbGFuZ3VhZ2UnKTtcbmNvbnN0IGxhbmd1YWdlQnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5ndWFnZS1idXR0b24nKTtcblxubGV0IHNpdGVMYW5ndWFnZTtcblxuY29uc3QgY2hhbmdlTGFuZ3VhZ2UgPSAoKSA9PiB7XG4gICAgZ2V0TG9jYWxTdG9yYWdlKCk7XG4gICAgZm9yIChsZXQga2V5IGluIGxhbmd1YWdlKSB7XG4gICAgICAgIGxldCBrZXlFeGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2tleX1gKTtcbiAgICAgICAgaWYgKGtleUV4aXN0KSB7XG4gICAgICAgICAgICBrZXlFeGlzdC5pbm5lckhUTUwgPSBsYW5ndWFnZVtrZXldW3NpdGVMYW5ndWFnZV07XG4gICAgICAgICAgICBpZiAoa2V5ID09PSAnbmFtZScgfHwga2V5ID09PSAnbGFiZWxfX2lucHV0JyB8fCBrZXkgPT09ICd0b2RvX19pbnB1dCcpIGtleUV4aXN0LnBsYWNlaG9sZGVyID0gbGFuZ3VhZ2Vba2V5XVtzaXRlTGFuZ3VhZ2VdO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBjaGFuZ2VVcmxBZGRyZXNzID0gKGUpID0+IHtcbiAgICBmb3IgKGxldCBidXR0b24gb2YgbGFuZ3VhZ2VCdXR0b25zKSB7XG4gICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgc2l0ZUxhbmd1YWdlID0gKGUudGFyZ2V0LmNsYXNzTmFtZSkuc2xpY2UoMCwgMik7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3NpdGVMYW5ndWFnZScsIHNpdGVMYW5ndWFnZSk7XG4gICAgbG9jYXRpb24uaHJlZiA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArICcjJyArIHNpdGVMYW5ndWFnZTtcbiAgICBnZXRXZWF0aGVyKCk7XG4gICAgZ2V0UXVvdGVzKCk7XG4gICAgY2hhbmdlTGFuZ3VhZ2UoKTtcbn1cblxuY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA/IHNpdGVMYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA6IHNpdGVMYW5ndWFnZSA9ICdlbic7XG59XG5leHBvcnQgeyBjaGFuZ2VMYW5ndWFnZXNCdG4sIGNoYW5nZVVybEFkZHJlc3MsIGNoYW5nZUxhbmd1YWdlIH0iLCJleHBvcnQgY29uc3QgZ2V0UmFuZG9tTnVtID0gKG1heCwgbWluKSA9PiB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICsgbWluKTtcbn0iLCJjb25zdCB0aW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRpbWUnKTtcbmNvbnN0IGRhdGVUYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGF0ZScpO1xuY29uc3QgZ3JlZXRpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3JlZXRpbmcnKTtcbmNvbnN0IHVzZXJuYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm5hbWUnKTtcblxubGV0IHNpdGVMYW5ndWFnZTtcblxuLy8gc2hvdyBncmVldGluZ1xuY29uc3Qgc2hvd0dyZWV0aW5nID0gKCkgPT4ge1xuICAgIC8vZ2V0VXNlcm5hbWUoKTtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBob3VycyA9IGRhdGUuZ2V0SG91cnMoKTtcbiAgICBncmVldGluZy50ZXh0Q29udGVudCA9IGAke2dldFRpbWVPZlRvZGF5KGhvdXJzKX1gO1xufVxuY29uc3QgZ2V0VGltZU9mVG9kYXkgPSAoaG91cnMsIGJhY2tncm91bmQpID0+IHtcbiAgICBjb25zdCBuYW1lc09mRGF5ID0ge1xuICAgICAgICAwOiB7XG4gICAgICAgICAgICAnZW4nOiAnR29vZCBuaWdodCcsXG4gICAgICAgICAgICAncnUnOiAn0JTQvtCx0YDQvtC5INC90L7Rh9C4JyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogJ25pZ2h0JyxcbiAgICAgICAgfSxcbiAgICAgICAgMToge1xuICAgICAgICAgICAgJ2VuJzogJ0dvb2QgbW9ybmluZycsXG4gICAgICAgICAgICAncnUnOiAn0JTQvtCx0YDQvtC1INGD0YLRgNC+JyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogJ21vcm5pbmcnXG4gICAgICAgIH0sXG4gICAgICAgIDI6IHtcbiAgICAgICAgICAgICdlbic6ICdHb29kIGFmdGVybm9vbicsXG4gICAgICAgICAgICAncnUnOiAn0JTQvtCx0YDRi9C5INC00LXQvdGMJyxcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kJzogJ2FmdGVybm9vbidcbiAgICAgICAgfSxcbiAgICAgICAgMzoge1xuICAgICAgICAgICAgJ2VuJzogJ0dvb2QgZXZlbmluZycsXG4gICAgICAgICAgICAncnUnOiAn0JTQvtCx0YDRi9C5INCy0LXRh9C10YAnLFxuICAgICAgICAgICAgJ2JhY2tncm91bmQnOiAnZXZlbmluZydcbiAgICAgICAgfSxcbiAgICB9XG4gICAgcmV0dXJuIGJhY2tncm91bmQgPyBuYW1lc09mRGF5W01hdGguZmxvb3IoaG91cnMgLyA2KV1bJ2JhY2tncm91bmQnXSA6IG5hbWVzT2ZEYXlbTWF0aC5mbG9vcihob3VycyAvIDYpXVtzaXRlTGFuZ3VhZ2VdO1xufVxuXG4vLyBzaG93IHRpbWUgYW5kIGRhdGVcbmNvbnN0IHNob3dUaW1lID0gKCkgPT4ge1xuICAgIGdldExvY2FsU3RvcmFnZSgpO1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gZGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICAvL2NvbnN0IGN1cnJlbnRUaW1lID0gYCR7ZGF0ZS5nZXRIb3VycygpfToke2RhdGUuZ2V0TWludXRlcygpfToke2RhdGUuZ2V0U2Vjb25kcygpfWBcbiAgICB0aW1lLnRleHRDb250ZW50ID0gY3VycmVudFRpbWU7XG4gICAgc2hvd0RhdGUoKTtcbiAgICBzaG93R3JlZXRpbmcoKTtcbiAgICBzZXRUaW1lb3V0KHNob3dUaW1lLCAxMDApO1xufVxuXG5jb25zdCBzaG93RGF0ZSA9ICgpID0+IHtcbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoKTtcbiAgICBjb25zdCBvcHRpb25zID0geyB3ZWVrZGF5OiBcImxvbmdcIiwgbW9udGg6IFwibG9uZ1wiLCBkYXk6IFwibnVtZXJpY1wiIH07XG4gICAgY29uc3QgY3VycmVudERhdGUgPSBkYXRlLnRvTG9jYWxlRGF0ZVN0cmluZyhzaXRlTGFuZ3VhZ2UsIG9wdGlvbnMpO1xuICAgIGRhdGVUYWcudGV4dENvbnRlbnQgPSBjdXJyZW50RGF0ZTtcbn1cblxuXG5jb25zdCBnZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGVMYW5ndWFnZScpID8gc2l0ZUxhbmd1YWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3NpdGVMYW5ndWFnZScpIDogc2l0ZUxhbmd1YWdlID0gJ2VuJztcbn1cblxuY29uc3QgZ2V0VXNlcm5hbWUgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCduYW1lJykpIHtcbiAgICAgICAgdXNlcm5hbWUudmFsdWUgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbmFtZScpO1xuICAgIH1cbn1cblxuY29uc3Qgc2V0VXNlcm5hbWUgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ25hbWUnLCB1c2VybmFtZS52YWx1ZSk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgc2V0VXNlcm5hbWUpO1xuXG5leHBvcnQge3Nob3dUaW1lLCBnZXRUaW1lT2ZUb2RheSwgZ2V0VXNlcm5hbWV9IiwiY29uc3QgbGFuZ3VhZ2UgPSB7XG4gICAgJ2VuJzoge1xuICAgICAgICAnZW4nOiAnZW4nLFxuICAgICAgICAncnUnOiAn0LDQvdCz0LsnLFxuICAgIH0sXG4gICAgJ3J1Jzoge1xuICAgICAgICAnZW4nOiAncnUnLFxuICAgICAgICAncnUnOiAn0YDRg9GBJyxcbiAgICB9LFxuICAgICduYW1lJzoge1xuICAgICAgICAnZW4nOiAnW0VudGVyIG5hbWVdJyxcbiAgICAgICAgJ3J1JzogJ1vQktCy0LXQtNC40YLQtSDQuNC80Y9dJyxcbiAgICB9LFxuICAgICdXaW5kIHNwZWVkJzoge1xuICAgICAgICAnZW4nOiAnV2luZCBzcGVlZCcsXG4gICAgICAgICdydSc6ICfQodC60L7RgNC+0YHRgtGMINCy0LXRgtGA0LAnLFxuICAgIH0sXG4gICAgJ0h1bWlkaXR5Jzoge1xuICAgICAgICAnZW4nOiAnSHVtaWRpdHknLFxuICAgICAgICAncnUnOiAn0JLQu9Cw0LbQvdC+0YHRgtGMJyxcbiAgICB9LFxuICAgICdzZXR0aW5ncy10aXRsZSc6IHtcbiAgICAgICAgJ2VuJzogJ1NldHRpbmdzJyxcbiAgICAgICAgJ3J1JzogJ9Cd0LDRgdGC0YDQvtC50LrQuCcsXG4gICAgfSxcbiAgICAnc2hvdy10aXRsZSc6IHtcbiAgICAgICAgJ2VuJzogJ1Nob3cnLFxuICAgICAgICAncnUnOiAn0J/QvtC60LDQt9Cw0YLRjCcsXG4gICAgfSxcbiAgICAncGxheWVyLXRleHQnOiB7XG4gICAgICAgICdlbic6ICdQbGF5ZXInLFxuICAgICAgICAncnUnOiAn0J/Qu9C10LXRgCcsXG4gICAgfSxcbiAgICAnc2V0dGluZ3Mtd2VhdGhlci10ZXh0Jzoge1xuICAgICAgICAnZW4nOiAnV2VhdGhlcicsXG4gICAgICAgICdydSc6ICfQn9C+0LPQvtC00LAnLFxuICAgIH0sXG4gICAgJ3NldHRpbmdzLXF1b3Rlcy10ZXh0Jzoge1xuICAgICAgICAnZW4nOiAnUXVvdGUnLFxuICAgICAgICAncnUnOiAn0KbQuNGC0LDRgtGLJyxcbiAgICB9LFxuICAgICdzZXR0aW5ncy1jbG9ja3MtdGV4dCc6IHtcbiAgICAgICAgJ2VuJzogJ1RpbWUnLFxuICAgICAgICAncnUnOiAn0KfQsNGB0YsnLFxuICAgIH0sXG4gICAgJ3NldHRpbmdzLWRhdGUtdGV4dCc6IHtcbiAgICAgICAgJ2VuJzogJ0RhdGUnLFxuICAgICAgICAncnUnOiAn0JTQsNGC0LAnLFxuICAgIH0sXG4gICAgJ3NldHRpbmdzLWdyZWV0aW5nLXRleHQnOiB7XG4gICAgICAgICdlbic6ICdHcmVldGluZycsXG4gICAgICAgICdydSc6ICfQn9GA0LjQstC10YLRgdGC0LLQuNC1JyxcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLXRpdGxlJzoge1xuICAgICAgICAnZW4nOiAnQmFja2dyb3VuZCcsXG4gICAgICAgICdydSc6ICfQpNC+0L3QvtCy0L7QtSDQuNC30L7QsdGA0LDQttC10L3QuNC1JyxcbiAgICB9LFxuICAgICdiYWNrZ3JvdW5kLXN1YnRpdGxlJzoge1xuICAgICAgICAnZW4nOiAnU2VsZWN0IHRoZSBiYWNrZ3JvdW5kIHNvdXJjZScsXG4gICAgICAgICdydSc6ICfQktGL0LHQtdGA0LjRgtC1INC40YHRgtC+0YfQvdC40Log0YTQvtC90L7QstC+0LPQviDQuNC30L7QsdGA0LDQttC10L3QuNGPJyxcbiAgICB9LFxuICAgICdsYWJlbF9faW5wdXQnOiB7XG4gICAgICAgICdlbic6ICdFbnRlciBiYWNrZ3JvdW5kIHRhZycsXG4gICAgICAgICdydSc6ICfQktCy0LXQtNC40YLQtSDRgtC10LMnLFxuICAgIH0sXG4gICAgJ3RhZy1idG4nOiB7XG4gICAgICAgICdlbic6ICdTdWJtaXQnLFxuICAgICAgICAncnUnOiAn0J/QvtC00YLQstC10YDQtNC40YLRjCcsXG4gICAgfSxcbiAgICAnbGFuZ3VhZ2UtdGl0bGUnOiB7XG4gICAgICAgICdlbic6ICdDaGFuZ2UgTGFuZ3VhZ2UnLFxuICAgICAgICAncnUnOiAn0JjQt9C80LXQvdC40YLRjCDRj9C30YvQuicsXG4gICAgfSxcbiAgICAndG9kby10aXR0bGUnOiB7XG4gICAgICAgICdlbic6ICdUb2RvJyxcbiAgICAgICAgJ3J1JzogJ9CX0LDQvNC10YLQutC4JyxcbiAgICB9LFxuICAgICd0b2RvX19pbnB1dCc6IHtcbiAgICAgICAgJ2VuJzogJ05ldyBUb2RvJyxcbiAgICAgICAgJ3J1JzogJ9CS0LLQtdC00LjRgtC1INC30LDQvNC10YLQutGDJyxcbiAgICB9LFxufVxuZXhwb3J0IGRlZmF1bHQgbGFuZ3VhZ2U7IiwiY29uc3QgcGxheUxpc3QgPSBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ0FxdWEgQ2FlbGVzdGlzJyxcbiAgICAgICAgc3JjOiAnLi9hc3NldHMvc291bmRzL0FxdWEgQ2FlbGVzdGlzLm1wMycsXG4gICAgICAgIGR1cmF0aW9uOiAnMDA6NDAnLFxuICAgICAgICBzZWNvbmRzOiAnNDAnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1JpdmVyIEZsb3dzIEluIFlvdScsXG4gICAgICAgIHNyYzogJy4vYXNzZXRzL3NvdW5kcy9SaXZlciBGbG93cyBJbiBZb3UubXAzJyxcbiAgICAgICAgZHVyYXRpb246ICcwMTozNycsXG4gICAgICAgIHNlY29uZHM6ICc5NycsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnU3VtbWVyIFdpbmQnLFxuICAgICAgICBzcmM6ICcuL2Fzc2V0cy9zb3VuZHMvU3VtbWVyIFdpbmQubXAzJyxcbiAgICAgICAgZHVyYXRpb246ICcwMTo1MScsXG4gICAgICAgIHNlY29uZHM6ICcxMTEnLFxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0VubmlvIE1vcnJpY29uZScsXG4gICAgICAgIHNyYzogJy4vYXNzZXRzL3NvdW5kcy9Fbm5pbyBNb3JyaWNvbmUubXAzJyxcbiAgICAgICAgZHVyYXRpb246ICcwMTozNycsXG4gICAgICAgIHNlY29uZHM6ICc5NycsXG4gICAgfSxcbl1cbmV4cG9ydCBkZWZhdWx0IHBsYXlMaXN0OyIsImltcG9ydCBwbGF5TGlzdCBmcm9tICcuL3BsYXlMaXN0LmpzJztcblxuY29uc3QgdGltZWxpbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGltZWxpbmUnKTtcbmNvbnN0IHRpbWVsaW5lUHJvZ3Jlc3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZ3Jlc3MnKTtcbmNvbnN0IGN1cnJlbnRUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmN1cnJlbnQnKTtcbmNvbnN0IHZvbHVtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWUnKTtcbmNvbnN0IHZvbHVtZVNsaWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52b2x1bWUtc2xpZGVyJyk7XG5jb25zdCB2b2x1bWVQZXJzZW50YWdlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZvbHVtZS1wZXJjZW50YWdlJyk7XG5jb25zdCB0cmFja1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRyYWNrLXRpdGxlJyk7XG5jb25zdCBkdXJhdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZW5ndGgnKTtcbmNvbnN0IGF1ZGlvID0gbmV3IEF1ZGlvKCk7XG5cbmV4cG9ydCBjb25zdCBwbGF5QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXknKTtcbmV4cG9ydCBjb25zdCBwbGF5TmV4dEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LW5leHQnKTtcbmV4cG9ydCBjb25zdCBwbGF5UHJldkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LXByZXYnKTtcblxubGV0IGlzUGxheSA9IGZhbHNlO1xubGV0IHBsYXlOdW0gPSAwO1xubGV0IHByZXZpb3VzQ2xpY2s7XG5cbi8vcGxheWVyIFxuY29uc3QgcGxheWxpc3RTb25ncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5LWxpc3QnKTtcbnBsYXlMaXN0LmZvckVhY2goZWwgPT4ge1xuICAgIGNvbnN0IGxpUGxheUl0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgIGxpUGxheUl0ZW0uY2xhc3NMaXN0LmFkZCgncGxheS1pdGVtJylcbiAgICBsaVBsYXlJdGVtLnRleHRDb250ZW50ID0gZWwudGl0bGU7XG4gICAgcGxheWxpc3RTb25ncy5hcHBlbmQobGlQbGF5SXRlbSk7XG59KTtcblxuY29uc3Qgc29uZ3NMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBsYXktaXRlbScpO1xuZXhwb3J0IGNvbnN0IHBsYXlBdWRpbyA9ICgpID0+IHtcbiAgICBpZiAoIWlzUGxheSkge1xuICAgICAgICB0b2dnbGVQbGF5QnV0dG9uKCk7XG4gICAgICAgIGR1cmF0aW9uLnRleHRDb250ZW50ID0gcGxheUxpc3RbcGxheU51bV0uZHVyYXRpb247XG4gICAgICAgIHRyYWNrVGl0bGUudGV4dENvbnRlbnQgPSBwbGF5TGlzdFtwbGF5TnVtXS50aXRsZTtcbiAgICAgICAgYXVkaW8uc3JjID0gcGxheUxpc3RbcGxheU51bV0uc3JjO1xuICAgICAgICBhdWRpby5jdXJyZW50VGltZSA9IDA7XG4gICAgICAgIGF1ZGlvLnBsYXkoKTtcbiAgICAgICAgc29uZ3NMaXN0LmZvckVhY2goZWwgPT4ge1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxheS1pdGVtLWFjdGl2ZScpO1xuICAgICAgICAgICAgZWwuY2xhc3NMaXN0LnJlbW92ZSgncGxheWluZy1pdGVtJyk7XG4gICAgICAgIH0pXG4gICAgICAgIHNvbmdzTGlzdFtwbGF5TnVtXS5jbGFzc0xpc3QuYWRkKCdwbGF5LWl0ZW0tYWN0aXZlJyk7XG4gICAgICAgIHNvbmdzTGlzdFtwbGF5TnVtXS5jbGFzc0xpc3QuYWRkKCdwbGF5aW5nLWl0ZW0nKTtcbiAgICAgICAgcHJldmlvdXNDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5aW5nLWl0ZW0nKTtcbiAgICAgICAgaXNQbGF5ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0b2dnbGVQbGF5QnV0dG9uKCk7XG4gICAgICAgIHNvbmdzTGlzdFtwbGF5TnVtXS5jbGFzc0xpc3QucmVtb3ZlKCdwbGF5aW5nLWl0ZW0nKTtcbiAgICAgICAgcHJldmlvdXNDbGljayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wbGF5aW5nLWl0ZW0nKTtcbiAgICAgICAgaXNQbGF5ID0gZmFsc2U7XG4gICAgICAgIGF1ZGlvLnBhdXNlKCk7XG4gICAgfVxufVxuXG4vLyBzdGFydCBwbGF5aW5nIG9uIGNsaWNrIG9uIHNvbmcgaW4gcGxheWxpc3RcbmNvbnN0IHBsYXlsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBsYXktbGlzdCcpO1xucGxheWxpc3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICBjb25zdCBlbGVtZW50ID0gZS50YXJnZXQ7XG4gICAgZm9yIChjb25zdCBlbCBpbiBzb25nc0xpc3QpIHtcbiAgICAgICAgaWYgKGVsZW1lbnQuaW5uZXJIVE1MID09PSBzb25nc0xpc3RbZWxdLmlubmVySFRNTCkge1xuICAgICAgICAgICAgcGxheU51bSA9IHBhcnNlSW50KGVsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2aW91c0NsaWNrID09PSBlbGVtZW50KSB7XG4gICAgICAgIGlzUGxheSA9IHRydWU7XG4gICAgICAgIHBsYXlBdWRpbygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlzUGxheSA9IGZhbHNlO1xuICAgICAgICBwbGF5QXVkaW8oKTtcbiAgICB9XG59KVxuXG50aW1lbGluZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHRpbWVsaW5lV2lkdGggPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aW1lbGluZSkud2lkdGg7XG4gICAgY29uc3QgdGltZVRvU2VlayA9IGUub2Zmc2V0WCAvIHBhcnNlSW50KHRpbWVsaW5lV2lkdGgpICogcGxheUxpc3RbcGxheU51bV0uc2Vjb25kcztcbiAgICBhdWRpby5jdXJyZW50VGltZSA9IHRpbWVUb1NlZWs7XG59KVxuXG52b2x1bWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgYXVkaW8ubXV0ZWQgPSAhYXVkaW8ubXV0ZWQ7XG4gICAgYXVkaW8ubXV0ZWQgPyB2b2x1bWUuY2xhc3NMaXN0LnJlcGxhY2UoJ3ZvbHVtZS11cCcsICd2b2x1bWUtbXV0ZScpIDogdm9sdW1lLmNsYXNzTGlzdC5yZXBsYWNlKCd2b2x1bWUtbXV0ZScsICd2b2x1bWUtdXAnKTtcbn0pXG5cbnZvbHVtZVNsaWRlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgIGNvbnN0IHZvbHVtZVdpZHRoID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodm9sdW1lU2xpZGVyKS53aWR0aDtcbiAgICBjb25zdCB2b2x1bWVMZXZlbCA9IGUub2Zmc2V0WCAvIChwYXJzZUludCh2b2x1bWVXaWR0aCkgLyAxMDApO1xuICAgIHZvbHVtZVBlcnNlbnRhZ2Uuc3R5bGUud2lkdGggPSB2b2x1bWVMZXZlbCArICclJztcbiAgICBhdWRpby52b2x1bWUgPSBgMC4ke3ZvbHVtZUxldmVsfWA7XG59KVxuXG5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgdGltZWxpbmVQcm9ncmVzcy5zdHlsZS53aWR0aCA9IGF1ZGlvLmN1cnJlbnRUaW1lIC8gcGxheUxpc3RbcGxheU51bV0uc2Vjb25kcyAqIDEwMCArICclJztcbiAgICBjdXJyZW50VGltZS50ZXh0Q29udGVudCA9IGdldFRpbWVDb2RlKGF1ZGlvLmN1cnJlbnRUaW1lKTtcbn0sIDUwMCk7XG5cbmNvbnN0IGdldFRpbWVDb2RlID0gbnVtID0+IHtcbiAgICBsZXQgc2Vjb25kcyA9IHBhcnNlSW50KG51bSk7XG4gICAgbGV0IG1pbnV0ZXMgPSBwYXJzZUludChzZWNvbmRzIC8gNjApO1xuICAgIHNlY29uZHMgLT0gbWludXRlcyAqIDYwO1xuICAgIHJldHVybiBgJHttaW51dGVzfToke1N0cmluZygnMCcgKyBzZWNvbmRzICUgNjApLnNsaWNlKC0yKX1gO1xufVxuXG5jb25zdCB0b2dnbGVQbGF5QnV0dG9uID0gKCkgPT4ge1xuICAgIGlzUGxheSA9PT0gZmFsc2UgPyBwbGF5QnRuLmNsYXNzTGlzdC5hZGQoJ3BhdXNlJykgOiBwbGF5QnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3BhdXNlJylcbn1cblxuZXhwb3J0IGNvbnN0IHBsYXlOZXh0ID0gKCkgPT4ge1xuICAgIHBsYXlOdW0gPT09IE9iamVjdC5rZXlzKHBsYXlMaXN0KS5sZW5ndGggLSAxID8gcGxheU51bSA9IDAgOiBwbGF5TnVtICs9IDE7XG4gICAgaXNQbGF5ID0gZmFsc2U7XG4gICAgcGxheUF1ZGlvKCk7XG59XG5cbmV4cG9ydCBjb25zdCBwbGF5UHJldiA9ICgpID0+IHtcbiAgICBwbGF5TnVtID09PSAwID8gcGxheU51bSA9IE9iamVjdC5rZXlzKHBsYXlMaXN0KS5sZW5ndGggLSAxIDogcGxheU51bSAtPSAxO1xuICAgIGlzUGxheSA9IGZhbHNlO1xuICAgIHBsYXlBdWRpbygpO1xufVxuXG5hdWRpby5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsICgpID0+IHBsYXlOZXh0KCkpO1xuXG5wbGF5QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheUF1ZGlvKTtcbnBsYXlOZXh0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcGxheU5leHQpO1xucGxheVByZXZCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBwbGF5UHJldik7IiwiaW1wb3J0IHtnZXRSYW5kb21OdW19IGZyb20gXCIuL2dldFJhbmRvbU51bS5qc1wiO1xuXG5jb25zdCBjaGFuZ2VRdW90ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jaGFuZ2UtcXVvdGUnKTtcbmNvbnN0IHF1b3RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnF1b3RlJyk7XG5jb25zdCBhdXRob3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYXV0aG9yJyk7XG5cbmxldCBzaXRlTGFuZ3VhZ2U7XG5cbi8vIHF1b3Rlc1xuY29uc3QgZ2V0UXVvdGVzID0gYXN5bmMgKCkgPT4ge1xuICAgIGdldExvY2FsU3RvcmFnZSgpO1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHF1b3RlcyA9ICcuL2Fzc2V0cy9xdW90ZXMuanNvbic7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHF1b3Rlcyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCBrZXkgPSBnZXRSYW5kb21OdW0oT2JqZWN0LmtleXMoZGF0YSkubGVuZ3RoLCAxKTtcbiAgICAgICAgcXVvdGUudGV4dENvbnRlbnQgPSBgXCIke2RhdGFba2V5XVtgdGV4dC0ke3NpdGVMYW5ndWFnZX1gXX1cImA7XG4gICAgICAgIGF1dGhvci50ZXh0Q29udGVudCA9IGRhdGFba2V5XVtgYXV0aG9yLSR7c2l0ZUxhbmd1YWdlfWBdO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZUxhbmd1YWdlJykgPyBzaXRlTGFuZ3VhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc2l0ZUxhbmd1YWdlJykgOiBzaXRlTGFuZ3VhZ2UgPSAnZW4nO1xufVxuXG5leHBvcnQge2NoYW5nZVF1b3RlLCBnZXRRdW90ZXN9ICIsIi8vIHNldHRpbmdzIHBvcHVwXG5jb25zdCBzZXR0aW5nc0xheW91dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZXR0aW5ncycpO1xuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2V0dGluZ3MtYnRuJyk7XG5jb25zdCBsYW5ndWFnZUJ1dHRvbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZ3VhZ2UtYnV0dG9uJyk7XG5cbmxldCBzaXRlTGFuZ3VhZ2U7XG5cbmNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xuICAgIGdldExvY2FsU3RvcmFnZSgpXG4gICAgc2V0dGluZ3NMYXlvdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2V0dGluZ3MtaGlkZGVuJyk7XG4gICAgc2V0dGluZ3NMYXlvdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnc2V0dGluZ3MnKSkge1xuICAgICAgICAgICAgc2V0dGluZ3NMYXlvdXQuY2xhc3NMaXN0LmFkZCgnc2V0dGluZ3MtaGlkZGVuJyk7XG4gICAgICAgIH1cbiAgICB9KVxuXG4gICAgZm9yIChsZXQgYnV0dG9uIG9mIGxhbmd1YWdlQnV0dG9ucykge1xuICAgICAgICBpZiAoYnV0dG9uLmNsYXNzTGlzdC5jb250YWlucyhgJHtzaXRlTGFuZ3VhZ2V9YCkpIHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA/IHNpdGVMYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA6IHNpdGVMYW5ndWFnZSA9ICdlbic7XG59XG5cbmV4cG9ydCB7c2V0dGluZ3NCdG4sIGdldFNldHRpbmdzfSIsImNvbnN0IGZvcm1GaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1jaGVjaycpXG5mb3JtRmllbGRzLmZvckVhY2goaXRlbSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBlID0+IHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oZS50YXJnZXQubmFtZSwgZS50YXJnZXQuY2hlY2tlZCk7XG4gICAgICAgIHNob3dCbG9jaygpO1xuICAgIH0pO1xufSk7XG5cbmNvbnN0IGJsb2NrcyA9IHtcbiAgICAncGxheWVyJzogJ3BsYXllcicsXG4gICAgJ3dlYXRoZXInOiAnd2VhdGhlcicsXG4gICAgJ3F1b3Rlcyc6ICdxdW90ZXMnLFxuICAgICd0aW1lJzogJ3RpbWUnLFxuICAgICdkYXRlJzogJ2RhdGUnLFxuICAgICdncmVldGluZy1jb250YWluZXInOiAnZ3JlZXRpbmctY29udGFpbmVyJyxcbn1cblxuY29uc3Qgc2hvd0Jsb2NrID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiBibG9ja3MpIHtcbiAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShibG9ja3Nba2V5XSkpID09PSB0cnVlID8gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YmxvY2tzW2tleV19YCkuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpIDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7YmxvY2tzW2tleV19YCkuY2xhc3NMaXN0LmFkZCgnc2hvdycpO1xuICAgIH1cbn1cblxuY29uc3QgaW5pdFNob3cgPSAoKSA9PiB7XG4gICAgZm9ybUZpZWxkcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuY2hlY2tlZCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oZWwubmFtZSkpO1xuICAgICAgICBzaG93QmxvY2soKTtcbiAgICB9KVxufVxuXG5leHBvcnQge2luaXRTaG93fSIsImNvbnN0IHRvZG9CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kby1idG4nKTtcbmNvbnN0IHRvZG9MYXlvdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudG9kbycpO1xuY29uc3QgdG9kb0lucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRvZG9fX2lucHV0Jyk7XG5jb25zdCB0b2RvTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50b2RvLWxpc3QnKTtcbmNvbnN0IGZvcm1GaWVsZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuc2hvdy1jaGVjaycpXG5cblxuXG5jb25zdCBnZXRUb2RvID0gKCkgPT4ge1xuICAgIHRvZG9MYXlvdXQuY2xhc3NMaXN0LnJlbW92ZSgndG9kby1oaWRkZW4nKTtcbiAgICB0b2RvTGF5b3V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3RvZG8nKSkge1xuICAgICAgICAgICAgdG9kb0xheW91dC5jbGFzc0xpc3QuYWRkKCd0b2RvLWhpZGRlbicpO1xuICAgICAgICB9XG4gICAgfSlcbn1cblxuY29uc3QgdG9kb09iamVjdCA9IHt9O1xuXG5jb25zdCB0b2RvSW5wdXRIYW5kbGVyID0gKGUpID0+IHtcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xuICAgICAgICBjb25zdCBsaVRvZG9JdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgbGlUb2RvSXRlbS5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3RfX2l0ZW0nKTtcblxuICAgICAgICBjb25zdCBjaGVja0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjaGVja0l0ZW0udHlwZSA9IFwiY2hlY2tib3hcIjtcbiAgICAgICAgLy9jaGVja0l0ZW0ubmFtZSA9ICduYW1lJztcbiAgICAgICAgY2hlY2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9faXRlbS1jaGVjaycpO1xuICAgICAgICAvL2NvbnN0IHJhbmRJZCA9IGdldFJhbmRvbU51bSgxMDAsIDApO1xuICAgICAgICAvL2NoZWNrSXRlbS5pZCA9IGAke3JhbmRJZH1gO1xuICAgICAgICBjaGVja0l0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgICAgICBjaGVja0l0ZW0ubmFtZSA9IGAke3RvZG9JbnB1dC52YWx1ZX1gO1xuXG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICAgICAgLy9sYWJlbC5odG1sRm9yID0gYCR7cmFuZElkfWA7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9faXRlbS1sYWJlbCcpXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2NoZWNrSXRlbS5uYW1lfWApKTtcblxuICAgICAgICBjb25zdCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9faXRlbS1idG4nKTtcbiAgICAgICAgYnRuLm5hbWUgPSBgJHt0b2RvSW5wdXQudmFsdWV9YDtcblxuICAgICAgICBsaVRvZG9JdGVtLmFwcGVuZENoaWxkKGNoZWNrSXRlbSk7XG4gICAgICAgIGxpVG9kb0l0ZW0uYXBwZW5kQ2hpbGQobGFiZWwpO1xuICAgICAgICBsaVRvZG9JdGVtLmFwcGVuZENoaWxkKGJ0bik7XG5cbiAgICAgICAgdG9kb0xpc3QuYXBwZW5kQ2hpbGQobGlUb2RvSXRlbSk7XG5cbiAgICAgICAgaWYgKCEoY2hlY2tJdGVtLm5hbWUgaW4gdG9kb09iamVjdCkpIHRvZG9PYmplY3RbY2hlY2tJdGVtLm5hbWVdID0gY2hlY2tJdGVtLmNoZWNrZWQ7XG5cbiAgICAgICAgdG9kb0lucHV0LnZhbHVlID0gJyc7XG4gICAgfVxuICAgIHRvZG9JdGVtRGVsZXRlKCk7XG5cbn1cblxuY29uc3QgdG9kb0luaXQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQubmFtZSAhPSAndW5kZWZpbmVkJykgdG9kb09iamVjdFtlLnRhcmdldC5uYW1lXSA9IGUudGFyZ2V0LmNoZWNrZWQ7XG59XG5cbmNvbnN0IHNldFRvZG9JdGVtID0gKCkgPT4ge1xuICAgIGZvciAobGV0IGtleSBpbiB0b2RvT2JqZWN0KSB7XG4gICAgICAgIGNvbnN0IGxpVG9kb0l0ZW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBsaVRvZG9JdGVtLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9faXRlbScpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrSXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGNoZWNrSXRlbS50eXBlID0gXCJjaGVja2JveFwiO1xuICAgICAgICBjaGVja0l0ZW0uY2xhc3NMaXN0LmFkZCgndG9kby1saXN0X19pdGVtLWNoZWNrJyk7XG4gICAgICAgIGNoZWNrSXRlbS5jaGVja2VkID0gdG9kb09iamVjdFtrZXldO1xuICAgICAgICBjaGVja0l0ZW0ubmFtZSA9IGtleTtcblxuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgICAgIGxhYmVsLmNsYXNzTGlzdC5hZGQoJ3RvZG8tbGlzdF9faXRlbS1sYWJlbCcpXG4gICAgICAgIGxhYmVsLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGAke2tleX1gKSk7XG5cbiAgICAgICAgY29uc3QgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKCd0b2RvLWxpc3RfX2l0ZW0tYnRuJyk7XG4gICAgICAgIGJ0bi5uYW1lID0ga2V5O1xuXG4gICAgICAgIGxpVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoY2hlY2tJdGVtKTtcbiAgICAgICAgbGlUb2RvSXRlbS5hcHBlbmRDaGlsZChsYWJlbCk7XG4gICAgICAgIGxpVG9kb0l0ZW0uYXBwZW5kQ2hpbGQoYnRuKTtcblxuICAgICAgICB0b2RvTGlzdC5hcHBlbmRDaGlsZChsaVRvZG9JdGVtKTtcbiAgICB9XG4gICAgdG9kb0l0ZW1EZWxldGUoKVxufVxuXG5jb25zdCB0b2RvSXRlbURlbGV0ZSA9ICgpID0+IHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudG9kby1saXN0X19pdGVtLWJ0bicpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnRhcmdldC5wYXJlbnROb2RlLnJlbW92ZSgpO1xuICAgICAgICAgICAgZGVsZXRlIHRvZG9PYmplY3RbZS50YXJnZXQubmFtZV1cbiAgICAgICAgfSk7XG4gICAgfSk7XG59XG5cbmNvbnN0IGdldExvY2FsU3RvcmFnZSA9ICgpID0+IHtcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9PYmplY3QnKSkge1xuICAgICAgICBPYmplY3QuYXNzaWduKHRvZG9PYmplY3QsIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3RvZG9PYmplY3QnKSkpO1xuICAgICAgICBzZXRUb2RvSXRlbSgpO1xuICAgIH1cbiAgIFxufVxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBnZXRMb2NhbFN0b3JhZ2UpO1xuXG5jb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3RvZG9PYmplY3QnLCBKU09OLnN0cmluZ2lmeSh0b2RvT2JqZWN0KSk7XG59XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmVmb3JldW5sb2FkJywgc2V0TG9jYWxTdG9yYWdlKTtcblxuZXhwb3J0IHt0b2RvQnRuLCBnZXRUb2RvLCB0b2RvSW5wdXQsIHRvZG9JbnB1dEhhbmRsZXIsIHRvZG9MaXN0LCB0b2RvSW5pdH0iLCJpbXBvcnQgbGFuZ3VhZ2UgZnJvbSAnLi9sYW5ndWFnZXMuanMnO1xuY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNpdHknKTtcbmNvbnN0IHdlYXRoZXJJY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItaWNvbicpO1xuY29uc3Qgd2VhdGhlckVycm9yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLndlYXRoZXItZXJyb3InKTtcbmNvbnN0IHRlbXBlcmF0dXJlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRlbXBlcmF0dXJlJyk7XG5jb25zdCB3ZWF0aGVyRGVzY3JpcHRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud2VhdGhlci1kZXNjcmlwdGlvbicpO1xuY29uc3Qgd2luZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53aW5kJyk7XG5jb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5odW1pZGl0eScpO1xuXG5sZXQgc2l0ZUxhbmd1YWdlO1xuY2l0eUlucHV0LnZhbHVlID0gJ01pbnNrJztcblxuLy8gd2VhdGhlclxuY29uc3QgZ2V0V2VhdGhlciA9IGFzeW5jICgpID0+IHtcbiAgICBnZXRMb2NhbFN0b3JhZ2UoKTtcbiAgICBnZXRDaXR5KCk7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGNpdHlJbnB1dC52YWx1ZSA9PT0gJ9Cc0LjQvdGB0LonICYmIHNpdGVMYW5ndWFnZSA9PT0gJ2VuJykgY2l0eUlucHV0LnZhbHVlID0gJ01pbnNrJztcbiAgICAgICAgaWYgKGNpdHlJbnB1dC52YWx1ZSA9PT0gJ01pbnNrJyAmJiBzaXRlTGFuZ3VhZ2UgPT09ICdydScpIGNpdHlJbnB1dC52YWx1ZSA9ICfQnNC40L3RgdC6JztcbiAgICAgICAgY29uc3QgdXJsID0gYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5SW5wdXQudmFsdWV9Jmxhbmc9JHtzaXRlTGFuZ3VhZ2V9JmFwcGlkPTM2MTBiNjFhZjJhM2I2YTIxOGRkNWI2YTI1NmE2MTM3JnVuaXRzPW1ldHJpY2A7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKHVybCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICB3ZWF0aGVySWNvbi5jbGFzc05hbWUgPSAnd2VhdGhlci1pY29uIG93Zic7XG4gICAgICAgIHdlYXRoZXJJY29uLmNsYXNzTGlzdC5hZGQoYG93Zi0ke2RhdGEud2VhdGhlclswXS5pZH1gKTtcbiAgICAgICAgd2VhdGhlckVycm9yLnRleHRDb250ZW50ID0gJydcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHtNYXRoLmZsb29yKGRhdGEubWFpbi50ZW1wKX3CsENgO1xuICAgICAgICB3ZWF0aGVyRGVzY3JpcHRpb24udGV4dENvbnRlbnQgPSBkYXRhLndlYXRoZXJbMF0uZGVzY3JpcHRpb247XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSBgJHtsYW5ndWFnZVsnV2luZCBzcGVlZCddW3NpdGVMYW5ndWFnZV19OiAke01hdGguZmxvb3IoZGF0YS53aW5kLnNwZWVkKX0gJHtzaXRlTGFuZ3VhZ2UgPT0gJ2VuJyA/ICdtL3MnIDogJ9C8L9GBJ31gO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9IGAke2xhbmd1YWdlWydIdW1pZGl0eSddW3NpdGVMYW5ndWFnZV19OiAke2RhdGEubWFpbi5odW1pZGl0eX0lYFxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgICAgd2VhdGhlckVycm9yLnRleHRDb250ZW50ID0gYEVycm9yISBjaXR5IG5vdCBmb3VuZCBmb3IgJyR7Y2l0eUlucHV0LnZhbHVlfSchYDtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgd2VhdGhlckRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gJyc7XG4gICAgICAgIHdpbmQudGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgaHVtaWRpdHkudGV4dENvbnRlbnQgPSAnJ1xuICAgIH1cbn1cblxuY29uc3QgZ2V0TG9jYWxTdG9yYWdlID0gKCkgPT4ge1xuICAgIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA/IHNpdGVMYW5ndWFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzaXRlTGFuZ3VhZ2UnKSA6IHNpdGVMYW5ndWFnZSA9ICdlbic7XG59XG5cbmNvbnN0IGdldENpdHkgPSAoKSA9PiB7XG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjaXR5JykpIHtcbiAgICAgICAgY2l0eUlucHV0LnZhbHVlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NpdHknKTtcbiAgICB9XG59XG5cbmNvbnN0IHNldENpdHkgPSAoKSA9PiB7XG4gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NpdHknLCBjaXR5SW5wdXQudmFsdWUpO1xuICAgIGdldFdlYXRoZXIoKTtcbn1cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdiZWZvcmV1bmxvYWQnLCBzZXRDaXR5KTtcblxuZXhwb3J0IHsgY2l0eUlucHV0LCBnZXRXZWF0aGVyLCBzZXRDaXR5IH0iXSwic291cmNlUm9vdCI6IiJ9
    