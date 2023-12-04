// reg_take.js

function searchFlights() {
    const baseUrl = 'https://test.api.amadeus.com/v2/shopping/flight-offers';
    const accessToken = 'Enter_access_Token_Here'; // Replace with your actual access token

    const originLocationCode = document.getElementById('origin').value;
    const destinationLocationCode = document.getElementById('destination').value;
    const departureDate = document.getElementById('departureDate').value;
    const adults = document.getElementById('adults').value;
    const maxResults = 5;

    const url = `${baseUrl}?originLocationCode=${originLocationCode}&destinationLocationCode=${destinationLocationCode}&departureDate=${departureDate}&adults=${adults}&max=${maxResults}`;

    fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${accessToken}`
        }
    })
    .then(response => response.json())
    .then(data => {
        /// Store flight details in sessionStorage
        sessionStorage.setItem('flightDetails', JSON.stringify(data));

        // Redirect to another page
        window.location.href = 'results.html';
    })
    .catch(error => {
        console.error('Error during flight search:', error);
    });
}


function displayResults(data) {
    const resultsContainer = document.getElementById('resultParagraph');
    
    // Clear previous results
    resultsContainer.innerHTML = '';

    if (data.data && data.data.length > 0) {
        data.data.forEach(flightOffer => {
            const itinerary = flightOffer.itineraries[0];
            const segments = itinerary.segments;

            if (segments && segments.length > 0) {
                segments.forEach(segment => {
                    const departureAirport = segment.departure.iataCode;
                    const arrivalAirport = segment.arrival.iataCode;
                    const departureTime = new Date(segment.departure.at).toLocaleString();
                    const arrivalTime = new Date(segment.arrival.at).toLocaleString();

                    // Create separate elements for each detail
                    const flightDetails = document.createElement('div');
                    flightDetails.innerHTML = `
                        <h3>Flight Details:</h3>
                        <p>${departureAirport} to ${arrivalAirport}</p>
                        <p>Departure: ${departureTime}</p>
                        <p>Arrival: ${arrivalTime}</p>
                    `;

                    resultsContainer.appendChild(flightDetails);
                });
            }

            const totalPrice = flightOffer.price.total;
            const currency = flightOffer.price.currency;

            // Create a separate element for the total price
            const priceDetails = document.createElement('div');
            priceDetails.innerHTML = `<h3>Total Price: ${totalPrice} ${currency}</h3>`;

            resultsContainer.appendChild(priceDetails);
        });
        
        // Redirect to another page after displaying results
        //window.location.href = 'results.html';
    } else {
        // Display a message if no flight results found
        resultsContainer.innerHTML = '<p>No flight results found.</p>';
    }
}
