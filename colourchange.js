// Define an array with arbitrary colors
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange'];
let currentIndex = 0; // Initialize index for cycling through colors

window.onload = function() {
    const myDiv = document.getElementById('mydiv');

    // Set initial color randomly
    currentIndex = Math.floor(Math.random() * colors.length);
    myDiv.style.backgroundColor = colors[currentIndex];

    // Add click event listener to change color
    myDiv.addEventListener('click', function() {
        // Move to the next color in the array
        currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
        myDiv.style.backgroundColor = colors[currentIndex];
    });
};
