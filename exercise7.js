document.getElementById("addButton").addEventListener("click", function() {
    // Get the song name from the input field
    const songName = document.getElementById("songTextInput").value;

    // Check if the input field is not empty
    if (songName) {
        // Create a new table row (tr)
        const newRow = document.createElement("tr");
        
        // Create a new table cell (td)
        const newCell = document.createElement("td");
        newCell.textContent = songName; // Set the text content to the song name

        // Append the cell to the row
        newRow.appendChild(newCell);
        
        // Append the new row to the playlist table body
        document.getElementById("playlist").getElementsByTagName('tbody')[0].appendChild(newRow);

        // Clear the input field
        document.getElementById("songTextInput").value = '';
    } else {
        alert("Please enter a song name.");
    }
});
