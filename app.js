document.addEventListener("DOMContentLoaded", () => {
    const regionSelect = document.getElementById("region");
    const countSelect = document.getElementById("count");
    const getEarthquakesButton = document.getElementById("getEarthquakes");
    const earthquakeTableBody = document.getElementById("earthquakeTable").querySelector("tbody");

    const defaultRegion = "MARMARA";
    const defaultCount = 10;

    async function getEarthquakes(region, count) {
        // Replace with your actual API endpoint
        const apiUrl = `http://localhost:5555/last/${count}?region=${region}`;

        try {
            const response = await fetch(apiUrl);
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching earthquakes:", error);
            return [];
        }
    }

    function displayEarthquakes(earthquakes) {
        earthquakeTableBody.innerHTML = "";
        earthquakes.forEach((earthquake, index) => {
            const row = earthquakeTableBody.insertRow();
            // Add alternating row styles and border
            row.className =
                "odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 border-gray-200";

            const dateCell = row.insertCell();
            const timeCell = row.insertCell();
            const magnitudeCell = row.insertCell();
            const locationCell = row.insertCell();
            const depthCell = row.insertCell();

            // Apply cell styling
            /*dateCell.className = "px-6 py-4 font-medium text-gray-900 dark:text-white";
            timeCell.className = "px-6 py-4";
            magnitudeCell.className = "px-6 py-4";
            locationCell.className = "px-6 py-4";
            depthCell.className = "px-6 py-4";*/

            dateCell.className = "px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4 font-edium text-gray-900 dark:text-white";
            timeCell.className = "px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4";
            magnitudeCell.className = "px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4";
            locationCell.className = "px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4";
            depthCell.className = "px-2 py-2 sm:px-4 sm:py-3 md:px-6 md:py-4";

            dateCell.textContent = earthquake.date;
            timeCell.textContent = earthquake.time;
            magnitudeCell.textContent = earthquake.magnitude;
            locationCell.textContent = earthquake.region;
            depthCell.textContent = earthquake.depth;
        });
    }

    async function loadDefaultEarthquakes() {
        const earthquakes = await getEarthquakes(defaultRegion, defaultCount);
        displayEarthquakes(earthquakes);
    }

    getEarthquakesButton.addEventListener("click", async () => {
        const region = regionSelect.value;
        const count = countSelect.value;
        const earthquakes = await getEarthquakes(region, count);
        displayEarthquakes(earthquakes);
    });

    loadDefaultEarthquakes();
});
