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

export {initShow}