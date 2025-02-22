// Handle music play/pause
document.getElementById('music-btn').addEventListener('click', function () {
    const music = document.getElementById('bg-music');
    if (music.paused) {
        music.play();
        this.textContent = 'Pause Music';
    } else {
        music.pause();
        this.textContent = 'Play Music';
    }
});

// Form submission event listener
document.getElementById('registration-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    // Here you would typically send the registration data to a server
    console.log(`Registered: ${name}, Email: ${email}`);
    
    // Optionally, you can clear the form after submission
    this.reset();
});

// Example function to update leaderboard (you'd replace this with real data)
function updateLeaderboard() {
    const leaderboard = document.getElementById('leaderboard');
    leaderboard.innerHTML = '<p>Player 1: 100 points</p><p>Player 2: 80 points</p>';
}

// Simulate updating the leaderboard every few seconds
setInterval(updateLeaderboard, 5000); // Update every 5 seconds
