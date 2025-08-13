import { events } from "../data/events-data.mjs";

const cards = document.querySelector('#event-cards');

function displayEvents(data) {
    cards.innerHTML = '';
    data.forEach((event) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let date = document.createElement('p');
        let location = document.createElement('p');
        let image = document.createElement('figure');
        let picture = document.createElement('img');
        let button = document.createElement('button');

        name.innerHTML = `${event.name}`;
        date.innerHTML = `Date: ${event.date}`;
        location.innerHTML = `Location: ${event.location}`;

        picture.setAttribute('src', event.image);
        picture.setAttribute('alt', `Image of ${event.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '300');
        image.appendChild(picture);

        button.innerHTML = "Details";

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(location);
        card.appendChild(image);
        card.appendChild(button);

        cards.appendChild(card);

        button.addEventListener('click', () => {
            displayEventDesc(event)
        });
    });
}

displayEvents(events);

// Modal
const eventDesc = document.querySelector('#event-desc');

function displayEventDesc(event) {
    eventDesc.innerHTML = '';
    eventDesc.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${event.name}</h2>
        <p><strong>Brief Description:</strong> ${event.description}</p>
    `;

    eventDesc.showModal();

    closeModal.addEventListener('click', () => {
        eventDesc.close();
    });
}