// Hamburger menu
const hamButton = document.querySelector('#hamButton');
const navElement = document.querySelector('#animateme');

hamButton.addEventListener('click', () => {
    navElement.classList.toggle('open');
    hamButton.classList.toggle('open');
});

// Getting data

const url = 'https://lionel-alvarado16.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#cards');

async function getCompanyData() {
    const response = await fetch(url);
    const data = await response.json();
    displayCompanies(data.companies);
}

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let phone = document.createElement('p');
        let website = document.createElement('p');

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Image of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        
        address.innerHTML = `${company.address}`;
        phone.innerHTML = `${company.phoneNumber}`;
        website.innerHTML = `${company.websiteurl}`;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(website);

        cards.appendChild(card);
    });
}

getCompanyData();