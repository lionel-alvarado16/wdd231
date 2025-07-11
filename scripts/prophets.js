const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // Create elements to add to the div.cards element
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const dateOfBirth = document.createElement('p');
        const placeOfBirth = document.createElement('p');
        const portrait = document.createElement('img');

        // Build the h2 content out to show the prophet's full name, date of birth and place of birth
        fullName.innerHTML = `${prophet.name} ${prophet.lastname}`;
        dateOfBirth.innerHTML = `Date of Birth: ${prophet.birthdate}`;
        placeOfBirth.innerHTML = `Place of Birth: ${prophet.birthplace}`;
        //Build the image portrait by setting all the relevant attributes
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        // Append the section(card) with the created elements
        card.appendChild(fullName);
        card.appendChild(dateOfBirth);
        card.appendChild(placeOfBirth);
        card.appendChild(portrait);

        cards.appendChild(card);

    });
}

getProphetData();