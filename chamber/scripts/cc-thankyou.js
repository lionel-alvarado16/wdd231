const myInfo = new URLSearchParams(window.location.search);
console.log(myInfo);

document.querySelector('#results').innerHTML = `
<h2>Membership Details</h2>
<p><strong>First Name:</strong> ${myInfo.get('fname')}</p>
<p><strong>Last Name:</strong> ${myInfo.get('lname')}</p>
<p><strong>Organizational Title:</strong> ${myInfo.get('orgtitle')}</p>
<p><strong>Email:</strong> ${myInfo.get('email')}</p>
<p><strong>Cell Phone:</strong> ${myInfo.get('phone')}</p>
<p><strong>Business/Organization's Name:</strong> ${myInfo.get('organization-name')}</p>
<p><strong>Membership Level:</strong> ${myInfo.get('membership-level')}</p>
<p><strong>Business/Organization's Description:</strong> ${myInfo.get('description')}</p>
<p><strong>Date Of Submission:</strong> ${myInfo.get('timestamp')}</p>
`;