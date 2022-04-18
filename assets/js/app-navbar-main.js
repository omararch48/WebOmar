// Elements
const menuIcon = document.querySelector('.menu-logo-mobile');
const mobileMenu = document.querySelector('.mobile ul');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const elementVector = [main, footer,];
// Put none display
const putNone = () => {
    if (mobileMenu.style.display !== 'none') {
        mobileMenu.style.display = 'none'
    }
};


// Execution
document.addEventListener('keydown', ({key}) => {
    if (key === 'Escape') {
        putNone();
    }
});


elementVector.forEach(element => {
    element.addEventListener('click', () => putNone());
});


menuIcon.addEventListener('click', () => {
    if (mobileMenu.style.display !== 'none') {
        mobileMenu.style.display = 'none'
    } else {
        mobileMenu.style.display = 'flex';
    }
});