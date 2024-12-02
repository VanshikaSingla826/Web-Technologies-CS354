document.getElementById("songForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input value
    const songName = document.getElementById("songName").value;

    // Add song to the table
    if (songName) {
        addSongToTable(songName);

        // Clear input field after submission
        document.getElementById("songName").value = '';
    }
});

function addSongToTable(songName) {
    const table = document.getElementById("songTable").getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const songCell = newRow.insertCell(0);
    songCell.innerHTML = songName;
}
