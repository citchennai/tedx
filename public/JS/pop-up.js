const closeButton = document.querySelector('.close-button');
const popUp = document.querySelector('.pop-up-container');

// scroll disable
const scroll = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo(0, 0);
    }
}



closeButton.addEventListener('click', () => {
    popUp.style.display = 'none';
    scroll();
}
);


