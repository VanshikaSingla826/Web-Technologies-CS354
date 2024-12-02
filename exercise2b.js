// Array of arbitrary colors
const colors = ['blue', 'red', 'green', 'yellow', 'purple', 'orange', 'pink'];
let currentIndex; // Initialize without setting a value

window.onload = function() {
    const myDiv = document.getElementById('mydiv');

    // Set the initial color randomly
    currentIndex = Math.floor(Math.random() * colors.length);
    myDiv.style.backgroundColor = colors[currentIndex];

    // Add click event listener to change the color
    myDiv.addEventListener('click', function() {
        // Move to the next color in the array
        currentIndex = (currentIndex + 1) % colors.length; // Cycle through colors
        myDiv.style.backgroundColor = colors[currentIndex];
    });
};
