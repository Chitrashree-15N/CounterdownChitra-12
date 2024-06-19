// Set the countdown duration in seconds
let timeLeft = 60;

// Function to start the countdown
function startCountdown() {
    // Update the countdown timer every second
    const countdownTimer = setInterval(() => {
        // Decrease timeLeft by 1 second
        timeLeft--;

        // Update the timer element
        const timerElement = document.getElementById('timer');
        timerElement.textContent = timeLeft;

        // Check if the countdown has reached zero
        if (timeLeft <= 0) {
            clearInterval(countdownTimer);
            timerElement.textContent = 'Time\'s up!';
            // Optionally, you can add further actions here when the countdown finishes
        }
    }, 1000); // Update every 1000 milliseconds (1 second)
}


