const url = 'https://lionel-alvarado16.github.io/wdd231/finalproject/data/planets.json';
const cards = document.querySelector('#planet-cards');

async function getPlanetData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayPlanets(data.planets); // uncommnet when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayPlanets = (planets) => {
    planets.forEach((planet) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('div');
        let name = document.createElement('h2');
        let type = document.createElement('p');
        let distanceFromSun = document.createElement('p');
        let diameter = document.createElement('p');
        let image = document.createElement('figure');
        let picture = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');
        let button = document.createElement('button');

        name.innerHTML = `${planet.name}`;
        type.innerHTML = `Type: ${planet.type}`;
        distanceFromSun.innerHTML = `Distance from Sun: ${planet.distance_from_sun}`;
        diameter.innerHTML = `Diameter: ${planet.diameter}`;

        picture.setAttribute('src', planet.image);
        picture.setAttribute('alt', `Image of ${planet.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '200');
        image.appendChild(picture);

        address.innerHTML = `Location: ${planet.address}`;
        description.innerHTML = `${planet.description}`;
        button.innerHTML = "Learn More";

        card.appendChild(name);
        card.appendChild(type);
        card.appendChild(distanceFromSun);
        card.appendChild(diameter);
        card.appendChild(image);
        card.appendChild(address);
        card.appendChild(description);
        card.appendChild(button);

        cards.appendChild(card);
    });
}

getPlanetData();