// Getting Data
const url = 'https://lionel-alvarado16.github.io/wdd231/chamber/data/items.json';
const cards = document.querySelector('#item-cards');

async function getItemData() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayItems(data.items); // uncommnet when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

const displayItems = (items) => {
    items.forEach((item) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('section');
        let title = document.createElement('h2');
        let image = document.createElement('figure');
        let picture = document.createElement('img');
        let address = document.createElement('address');
        let description = document.createElement('p');

        title.innerHTML = `${item.name}`;

        picture.setAttribute('src', item.image);
        picture.setAttribute('alt', `Image of ${item.name}`);
        picture.setAttribute('loading', 'lazy');
        picture.setAttribute('width', '300');
        picture.setAttribute('height', '200');
        image.appendChild(picture);

        address.innerHTML = `${item.address}`;
        description.innerHTML = `${item.description}`;

        card.appendChild(title);
        card.appendChild(picture);
        card.appendChild(address);
        card.appendChild(description);

        cards.appendChild(card);
    });
}

getItemData();