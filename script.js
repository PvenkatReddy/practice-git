document.getElementById('panchangam-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    // Placeholder for Panchangam data
    const panchangamData = `
        <p><strong>Sunrise:</strong> 6:00 AM</p>
        <p><strong>Sunset:</strong> 6:00 PM</p>
        <p><strong>Tithi:</strong> Shukla Paksha</p>
        <p><strong>Nakshatra:</strong> Rohini</p>
        <p><strong>Yoga:</strong> Vishkambha</p>
        <p><strong>Karana:</strong> Balava</p>
        <p><strong>Rahu Kalam:</strong> 10:30 AM - 12:00 PM</p>
        <p><strong>Yamaganda:</strong> 3:00 PM - 4:30 PM</p>
        <p><strong>Gulikai:</strong> 7:30 AM - 9:00 AM</p>
    `;

    resultDiv.innerHTML = `<h2>Hello, ${name}!</h2><p>Your personalized Panchangam for ${dob}:</p>${panchangamData}`;
});
