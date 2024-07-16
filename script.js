document.getElementById('astrology-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');

    // Placeholder for Astrology data
    const astrologyData = `
        <p><strong>Sun Sign:</strong> Aries</p>
        <p><strong>Moon Sign:</strong> Taurus</p>
        <p><strong>Ascendant:</strong> Gemini</p>
        <p><strong>Planetary Positions:</strong> Sun in Aries, Moon in Taurus, Mars in Leo</p>
        <p><strong>Daily Horoscope:</strong> You will have a productive day and may receive good news regarding your career.</p>
    `;

    resultDiv.innerHTML = `<h2>Hello, ${name}!</h2><p>Your personalized astrology report for ${dob}:</p>${astrologyData}`;
});
