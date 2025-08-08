import { membershipLevels } from "../data/membership_levels.js";

const mydialog = document.querySelector('#mydialog');

const nonProfitLevel = document.querySelector('#non-profit-level');
const bronzeLevel = document.querySelector('#bronze-level');
const silverLevel = document.querySelector('#silver-level');
const goldLevel = document.querySelector('#gold-level');

nonProfitLevel.addEventListener('click', () => {
    showDialog(membershipLevels.find(membershipLevel => membershipLevel.name === "Non Profit Membership Level"))
});

bronzeLevel.addEventListener('click', () => {
    showDialog(membershipLevels.find(membershipLevel => membershipLevel.name === "Bronze Membership Level"))
});

silverLevel.addEventListener('click', () => {
    showDialog(membershipLevels.find(membershipLevel => membershipLevel.name === "Silver Membership Level"))
});

goldLevel.addEventListener('click', () => {
    showDialog(membershipLevels.find(membershipLevel => membershipLevel.name === "Gold Membership Level"))
});

function showDialog(filteredLevel) {
    displayMembershipLevelDetails(filteredLevel);
}

function displayMembershipLevelDetails(membershiplevel) {
    mydialog.innerHTML = '';
    mydialog.innerHTML = `
        <div>
            <h2>${membershiplevel.name}</h2>
            <button id="closeModal">❌</button>
        </div>
        <p><strong>Cost:</strong> ${membershiplevel.cost}</p>
        <p><strong>Description:</strong> ${membershiplevel.description}</p>
        <p><strong>Benefits:</strong> ${membershiplevel.benefits}</p>
    `;

    mydialog.showModal();

    closeModal.addEventListener("click", () => {
        mydialog.close();
    });
}

// Create current date/time in ISO format (YYYY-MM-DD HH:MM:SS)
const now = new Date();
const formattedDateTime = now.getFullYear() + "-" +
    String(now.getMonth() + 1).padStart(2, '0') + "-" +
    String(now.getDate()).padStart(2, '0') + " " +
    String(now.getHours()).padStart(2, '0') + ":" +
    String(now.getMinutes()).padStart(2, '0') + ":" +
    String(now.getSeconds()).padStart(2, '0');

// Assign value to hidden field
document.getElementById("timestamp").value = formattedDateTime;