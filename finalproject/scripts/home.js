import { events } from "../data/events-data.mjs";

// Display Explore the Solar System Cards
const url = 'https://lionel-alvarado16.github.io/wdd231/finalproject/data/planets.json';
const cards = document.querySelector('#sl-planets');

async function getPlanetData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            const planetsData = data.planets;
            displayPlanets(randomPlanets(planetsData));
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

// Function to select companies ramdomly
function randomPlanets(planets) {
    const shuffle = [...planets].sort(() => 0.5 - Math.random());
    return shuffle.slice(0, 3);
}

// Display planets function
const displayPlanets = (planets) => {
    cards.innerHTML = '';
    planets.forEach((planet) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let type = document.createElement('p');
        let distanceFromSun = document.createElement('p');
        let diameter = document.createElement('p');
        let image = document.createElement('figure');
        let picture = document.createElement('img');

        name.innerHTML = `${planet.name}`;
        type.innerHTML = `Type: ${planet.type}`;
        distanceFromSun.innerHTML = `Distance from Sun: ${planet.distance_from_sun}`;
        diameter.innerHTML = `Diameter: ${planet.diameter}`;

        picture.setAttribute('src', planet.image);
        picture.setAttribute('alt', `Image of ${planet.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '300');
        image.appendChild(picture);

        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(distanceFromSun);
        card.appendChild(diameter);
        card.appendChild(image);

        cards.appendChild(card);
    });
}

getPlanetData();

// Display Explore the Solar System Cards
const eventCards = document.querySelector('#sl-events');

function getNextThreeEvents(events) {
    const today = new Date();
    return events
        .filter(event => new Date(event.date) >= today) // Only future or current
        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort by ascending date
        .slice(0, 3); // First 3
}

function displayEvents(data) {
    cards.innerHTML = '';
    data.forEach((event) => {
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let date = document.createElement('p');
        let location = document.createElement('p');
        let image = document.createElement('figure');
        let picture = document.createElement('img');

        name.innerHTML = `${event.name}`;
        date.innerHTML = `Date: ${event.date}`;
        location.innerHTML = `Location: ${event.location}`;

        picture.setAttribute('src', event.image);
        picture.setAttribute('alt', `Image of ${event.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '300');
        image.appendChild(picture);

        card.appendChild(name);
        card.appendChild(date);
        card.appendChild(location);
        card.appendChild(image);

        eventCards.appendChild(card);
    });
}

// Get and display only the next 3 events
const nextThreeEvents = getNextThreeEvents(events);
displayEvents(nextThreeEvents);