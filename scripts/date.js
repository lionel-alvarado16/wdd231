const currentyear = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

const today = new Date();

function updateFooterContent() {
    if (window.matchMedia("(min-width: 37.5em)").matches) {
        currentyear.innerHTML = `&copy;${today.getFullYear()} 🎸 Lionel Alexander Alvarado 🎸 Lima, Peru `;
    } else {
        currentyear.innerHTML = `&copy;${today.getFullYear()}<br><span>🎸 Lionel Alexander Alvarado 🎸</span><br><span>Lima, Peru</span>`;
    }
}

updateFooterContent();
lastModified.innerHTML = `Last Modification: ${document.lastModified}`;