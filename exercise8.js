// Array of colors to be displayed
const colorsArray = [
    "#FF5733", "#33FF57", "#3357FF", "#F3FF33",
    "#FF33A1", "#33FFF2", "#FF8333", "#D033FF",
    "#33FF8D", "#FF3380", "#FFC300", "#DAF7A6"
];

// Function to create color tiles
function createColorTiles() {
    const colorsDiv = document.getElementById('colors');

    colorsArray.forEach(color => {
        const colorTile = document.createElement('div');
        colorTile.style.backgroundColor = color;
        colorTile.style.width = '50px';
        colorTile.style.height = '50px';
        colorTile.style.display = 'inline-block';
        colorTile.style.margin = '5px';
        colorTile.style.cursor = 'pointer';

        // Add click event to each tile
        colorTile.addEventListener('click', function() {
            selectColor(color);
        });

        colorsDiv.appendChild(colorTile);
    });
}

// Function to select a color and update the selected div
function selectColor(color) {
    const selectedDiv = document.getElementById('selected');
    selectedDiv.textContent = color; // Set color code as text
    selectedDiv.style.backgroundColor = color; // Set background color
}

// Initialize the color tiles on page load
window.onload = createColorTiles;
