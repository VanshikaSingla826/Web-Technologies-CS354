document.getElementById('whackButton').addEventListener('click', function() {
    // Infinite loop to open popups
    setInterval(function() {
        // Create a new popup window
        window.open('data:text/html;charset=utf-8,' +
            encodeURIComponent('<html><head><title>Popup</title></head><body>' +
            '<h1>You just got whacked!</h1>' +
            '<p>This is a popup window.</p>' +
            '<button onclick="window.close()">Close</button>' +
            '</body></html>'), 
            '_blank', 
            'width=300,height=200');
    }, 100); // Adjust the interval if needed
});
