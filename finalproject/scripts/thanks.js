const myInfo = new URLSearchParams(window.location.search);

document.querySelector('#results').innerHTML = `
<h2>Membership Details</h2>
<p><strong>First Name:</strong> ${myInfo.get('fname')}</p>
<p><strong>Last Name:</strong> ${myInfo.get('lname')}</p>
<p><strong>Email:</strong> ${myInfo.get('email')}</p>
<p><strong>Birthdate:</strong> ${myInfo.get('birthdate')}</p>
<p><strong>Cell Phone:</strong> ${myInfo.get('phone')}</p>
<p><strong>Event's Name:</strong> ${myInfo.get('event')}</p>
<p><strong>Comments:</strong> ${myInfo.get('comments')}</p>
`;