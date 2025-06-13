const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div cards element
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birth = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        birth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.innerHTML = `Place of Birth: ${prophet.birthplace}`

        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.appendChild(fullName);
        card.appendChild(birth);
        card.appendChild(birthPlace);
        card.appendChild(portrait);

        cards.appendChild(card);
    });
}

getProphetData();