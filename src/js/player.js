import playList from './playList.js';

const timeline = document.querySelector('.timeline');
const timelineProgress = document.querySelector('.progress');
const currentTime = document.querySelector('.current');
const volume = document.querySelector('.volume');
const volumeSlider = document.querySelector('.volume-slider');
const volumePersentage = document.querySelector('.volume-percentage');
const trackTitle = document.querySelector('.track-title');
const duration = document.querySelector('.length');
const audio = new Audio();

export const playBtn = document.querySelector('.play');
export const playNextBtn = document.querySelector('.play-next');
export const playPrevBtn = document.querySelector('.play-prev');

let isPlay = false;
let playNum = 0;
let previousClick;

//player 
const playlistSongs = document.querySelector('.play-list');
playList.forEach(el => {
    const liPlayItem = document.createElement('li');
    liPlayItem.classList.add('play-item')
    liPlayItem.textContent = el.title;
    playlistSongs.append(liPlayItem);
});

const songsList = document.querySelectorAll('.play-item');
export const playAudio = () => {
    if (!isPlay) {
        togglePlayButton();
        duration.textContent = playList[playNum].duration;
        trackTitle.textContent = playList[playNum].title;
        audio.src = playList[playNum].src;
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
    const timeToSeek = e.offsetX / parseInt(timelineWidth) * playList[playNum].seconds;
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
    timelineProgress.style.width = audio.currentTime / playList[playNum].seconds * 100 + '%';
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

export const playNext = () => {
    playNum === Object.keys(playList).length - 1 ? playNum = 0 : playNum += 1;
    isPlay = false;
    playAudio();
}

export const playPrev = () => {
    playNum === 0 ? playNum = Object.keys(playList).length - 1 : playNum -= 1;
    isPlay = false;
    playAudio();
}

audio.addEventListener('ended', () => playNext());

playBtn.addEventListener('click', playAudio);
playNextBtn.addEventListener('click', playNext);
playPrevBtn.addEventListener('click', playPrev);