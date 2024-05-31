const header = document.querySelector('.header__wrapper--navigation');
const menu = document.querySelector('.header__wrapper--menu');
const close = document.querySelector('.header__wrapper--close');

let isVisible = false; // Initial state



// Add event listener for the menu
menu.addEventListener('click', handleHideMenu);
close.addEventListener('click', handleHideMenu);


// Reuse this function
function handleHideMenu() {
    if (!isVisible) {
        // Change header attribute
        header.removeAttribute('display');
        header.setAttribute('style', 'display: flex');

        // Change menu attribute
        menu.removeAttribute('display');
        menu.setAttribute('style', 'display: none');

        // Change close icon attribute
        close.removeAttribute('display');
        close.setAttribute('style', 'display: flex');

        isVisible = !isVisible;
    }
    else {
        // Header
        header.removeAttribute('display');
        header.setAttribute('style', 'display: none');

        // Change menu attribute
        menu.removeAttribute('display');
        menu.setAttribute('style', 'display: flex');

        // Change menu attribute
        close.removeAttribute('display');
        close.setAttribute('style', 'display: none');


        isVisible = !isVisible;
    }
}