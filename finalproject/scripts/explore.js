const cards = document.querySelector('#planet-cards');

async function getPlanetData() {
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