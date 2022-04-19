// Elements
const menuIcon = document.querySelector('.menu-logo-mobile');
let mobileMenu = document.querySelector('.mobile-none-ul');
const main = document.querySelector('main');
const footer = document.querySelector('footer');
const elementVector = [main, footer,];


// Put none display
const putNone = () => {
    if (mobileMenu.classList.contains('mobile-ul')) {
        mobileMenu.classList.toggle('mobile-ul');
        mobileMenu.classList.toggle('mobile-none-ul');
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
    mobileMenu.classList.toggle('mobile-ul');
    mobileMenu.classList.toggle('mobile-none-ul');
});