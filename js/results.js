document.addEventListener("DOMContentLoaded", function() {
    // Retrieve flight details from sessionStorage
    const flightDetails = JSON.parse(sessionStorage.getItem('flightDetails'));

    // Display the flight details on the page as needed
    if (flightDetails) {
        displayResults(flightDetails);
    } else {
        console.error('Flight details not found.');
    }
});
