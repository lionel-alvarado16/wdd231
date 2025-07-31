// Current weather section
// Create HTML elements in the document
const weatherIcon = document.querySelector('#weather-icon');
const currentTemp = document.querySelector('#temperature');
const description = document.querySelector('#description');
const highTemp = document.querySelector('#high');
const lowTemp = document.querySelector('#low');
const humidity = document.querySelector('#humidity');
const sunrise = document.querySelector('#sunrise');
const sunset = document.querySelector('#sunset');

// Create required values for the URL
const myLat = "-11.92";
const myLong = "-77.05";

// Consutruct a full path using template literals
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&units=metric&appid=2c6a2285ce9048f33ec9132f22845bda`;

// Try to grab the current weather data
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only
            displayResults(data); // uncommnet when ready
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {
    const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    currentTemp.innerHTML = `${data.main.temp}&deg;C`;
    description.innerHTML = data.weather[0].description;
    highTemp.innerHTML = `${data.main.temp_max}&deg;C`;
    lowTemp.innerHTML = `${data.main.temp_min}&deg;C`;
    humidity.innerHTML = `${data.main.humidity}%`;

    let hourConversion = new Date(data.sys.sunrise * 1000);
    sunrise.innerHTML = timeformat(hourConversion);

    hourConversion = new Date(data.sys.sunset * 1000);
    sunset.innerHTML = timeformat(hourConversion);
}

// Format the time
function timeformat (hour) {
    const formattedTime = hour.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit',
    }).toLowerCase();

    return formattedTime;
}

// Weather Forecast Section
// Consutruct a full path using template literals
const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${myLat}&lon=${myLong}&units=metric&appid=2c6a2285ce9048f33ec9132f22845bda`;

// Try to grab the weather forecast data
async function apiFetchWf() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            // console.log(data); // testing only

            let today = "";
            let list = data.list;
            let date;
            let day;

            for (let i = 0; i < 3; i++) {
                let lItem;

                for (let j = 0; j < list.length; j++) {
                    let item = list[j];
                    date = new Date(item.dt * 1000);
                    day = date.toLocaleDateString('en-US', {
                        weekday: 'long'
                    });

                    if (day !== today) {
                        lItem = item;
                        today = day;
                        list = list.slice(j);
                        break;
                    }
                }

                if (i === 0) {
                    document.getElementById('today').innerHTML = `Today: ${lItem.main.temp}&deg;C`;
                }
                if (i === 1) {
                    document.getElementById('day1').innerHTML = `${day}: ${lItem.main.temp}&deg;C`
                }
                if (i === 2) {
                    document.getElementById('day2').innerHTML = `${day}: ${lItem.main.temp}&deg;C`
                }
            }

        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

apiFetch();
apiFetchWf();

// Display 'spotlight' advertisement cards
const membersUrl = 'https://lionel-alvarado16.github.io/wdd231/chamber/data/members.json';
const cards = document.querySelector('#spotlights');

async function getCompanyData() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    displayCompanies(randomCompanies(data.companies));
}

// Function to select companies ramdomly
function randomCompanies(companies) {
    const filteredCompanies = companies.filter((company) => [2, 3].includes(company.membershipLevel));
    const shuffle = filteredCompanies.sort(() => 0.5 - Math.random());
    return shuffle.slice(0, 3);
}

// Display companies function
const displayCompanies = (companies) => {
    companies.forEach((company) => {
        // Create elemets to add to the div cards element
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let slCont = document.createElement('div');
        let iCont = document.createElement('div');
        let slInfo = document.createElement('div');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let membershipLevel = document.createElement('p');

        name.innerHTML = `${company.name}`;
        name.setAttribute('class', 'company-name');

        logo.setAttribute('src', company.image);
        logo.setAttribute('alt', `Image of ${company.name}`);
        logo.setAttribute('loading', 'lazy');
        // logo.setAttribute('width', '200');

        phone.innerHTML = `${company.phoneNumber}`;
        address.innerHTML = `${company.address}`;

        website.setAttribute('href', company.websiteurl);
        website.setAttribute('target', '_blank');
        website.innerHTML = `${company.websiteurl}`;

        if (company.membershipLevel === 3) {
            membershipLevel.innerHTML = 'Gold Member';
        } else if (company.membershipLevel === 2) {
            membershipLevel.innerHTML = 'Silver Member';
        } else {
            membershipLevel.innerHTML = 'Member';
        }

        iCont.classList.add("i-cont");
        iCont.appendChild(logo);
        logo.classList.add("sl-icon");

        slInfo.classList.add("sl-info");
        slInfo.appendChild(phone);
        slInfo.appendChild(address);
        slInfo.appendChild(website);
        slInfo.appendChild(membershipLevel);

        slCont.classList.add("sl-cont");
        slCont.appendChild(iCont);
        slCont.appendChild(slInfo);
        
        card.classList.add("spotl");
        card.appendChild(name);
        card.appendChild(slCont);
        
        cards.appendChild(card);
    });
}

getCompanyData();