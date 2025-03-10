function checkBusinessStatus() {
    const now = new Date();
    const currentHour = now.getHours();
    const statusElement = document.getElementById('status');

    // Business hours: 7:00 AM (7) to 10:00 PM (22)
    const openingHour = 7;
    const closingHour = 22;

    if (currentHour >= openingHour && currentHour < closingHour) {
        statusElement.textContent = 'Open';
        statusElement.classList.add('open');
        statusElement.classList.remove('closed');
    } else {
        statusElement.textContent = 'Closed';
        statusElement.classList.add('closed');
        statusElement.classList.remove('open');
    }
}

// Check business status on page load
checkBusinessStatus();

// Optional: Update status every minute
setInterval(checkBusinessStatus, 60000);
