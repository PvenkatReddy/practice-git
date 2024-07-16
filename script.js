document.getElementById('panchangam-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const dob = document.getElementById('dob').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `<h2>Hello, ${name}!</h2><p>Your personalized Panchangam for ${dob} will be displayed here.</p>`;
});
