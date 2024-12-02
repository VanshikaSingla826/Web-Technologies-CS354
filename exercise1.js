// Get the div element
var myDiv = document.getElementById('mydiv');

// Change text on mouseover
myDiv.addEventListener('mouseover', function() {
    myDiv.textContent = 'Can I help you?';
});

// Change text back on mouseout
myDiv.addEventListener('mouseout', function() {
    myDiv.textContent = 'Hello world';
});
