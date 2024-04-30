var heading = document.getElementById("who");

// Function to toggle wave animation
function toggleAnimation() {
    heading.classList.toggle("wave-animation"); // Toggle the 'wave-animation' class
}

// Toggle animation every 5 seconds (5000 milliseconds)
setInterval(toggleAnimation, 2000); // Change every 5 seconds

function showPopup(type) {
    if (type === 'about') {
        alert('you are already in about page!');
    }
}