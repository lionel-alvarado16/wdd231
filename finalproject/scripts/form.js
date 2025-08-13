import { events } from "../data/events-data.mjs";

// List of Events
const eventSelected = document.getElementById("eventSelected")

events.forEach(event => {
    const option = document.createElement("option");
    option.value = event.name;
    option.textContent = event.name;
    eventSelected.appendChild(option);
});