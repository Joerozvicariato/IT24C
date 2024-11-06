// Get the elements from the DOM
const logButton = document.getElementById("logButton");
const clearButton = document.getElementById("clearButton");
const logCountDisplay = document.getElementById("logCount");
const cardContainer = document.getElementById("cardContainer");

let clickCount = 0; // Track the number of button clicks
let logs = []; // Store the logs

// Function to update the log count and display
function updateLogCount() {
    logCountDisplay.textContent = `Total Logs: ${clickCount}`;
}

// Function to render logs into card format
function renderLogs() {
    cardContainer.innerHTML = ""; // Clear previous content
    logs.forEach((log, index) => {
        const card = document.createElement("div");
        card.classList.add("card", "m-2", "p-3");
        card.style.width = "18rem"; // Set a fixed width for cards

        // Card content
        card.innerHTML = `
            <h5 class="card-title">Log #${index + 1}</h5>
            <p class="card-text">Button clicked at: ${log.timestamp}</p>
        `;
        cardContainer.appendChild(card);
    });
}

// Event listener for the "Click Me" button
logButton.addEventListener("click", () => {
    clickCount++;
    const timestamp = new Date().toLocaleString(); // Get the current date and time
    logs.push({ timestamp }); // Add the new log entry
    updateLogCount(); // Update the log count on the page
    renderLogs(); // Render the updated logs to the page
});

// Event listener for the "Clear" button
clearButton.addEventListener("click", () => {
    clickCount = 0; // Reset the click count
    logs = []; // Clear the logs
    updateLogCount(); // Update the log count on the page
    renderLogs(); // Render the cleared logs (empty container)
});