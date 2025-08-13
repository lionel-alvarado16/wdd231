const url = 'https://lionel-alvarado16.github.io/wdd231/finalproject/data/planets.json';
const cards = document.querySelector('#planet-cards');

async function getPlanetData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            allPlanetsData = data.planets;
            displayPlanets(allPlanetsData);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

//Setting the filters
const allItems = document.querySelector('#all');
const planetsBtn = document.querySelector('#planets');
const moonsBtn = document.querySelector('#moons');
const dwarfBtn = document.querySelector('#dwarf');

allItems.addEventListener('click', () => {
    displayPlanets(allPlanetsData);
});

planetsBtn.addEventListener('click', () => {
    displayPlanets(allPlanetsData.filter(p => p.type.toLowerCase() === "planet"));
});

moonsBtn.addEventListener('click', () => {
    displayPlanets(allPlanetsData.filter(p => p.type.toLowerCase() === "moon"));
});

dwarfBtn.addEventListener('click', () => {
    displayPlanets(allPlanetsData.filter(p => p.type.toLowerCase() === "dwarf planet"));
});

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
        let button = document.createElement('button');

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

        button.classList.add("explore-button");
        button.innerHTML = "More Info";

        card.classList.add("explore");
        card.appendChild(name);
        card.appendChild(image);
        card.appendChild(type);
        card.appendChild(distanceFromSun);
        card.appendChild(diameter);
        card.appendChild(button);

        cards.appendChild(card);

        button.addEventListener('click', () => {
            displayPlanetDesc(planet)
        });
    });
}

getPlanetData();

// Modal
const planetDesc = document.querySelector('#planet-desc');

function displayPlanetDesc(planet) {
    planetDesc.innerHTML = '';
    planetDesc.innerHTML = `
        <button id="closeModal">❌</button>
        <h2>${planet.name}</h2>
        <p><strong>Brief Description:</strong> ${planet.description}</p>
    `;

    planetDesc.showModal();

    closeModal.addEventListener('click', () => {
        planetDesc.close();
    });
}