const hamButton = document.querySelector('#hamButton');
const navElement = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});