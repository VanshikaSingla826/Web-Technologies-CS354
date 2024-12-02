window.onload = function() {
    var labyrinth = new Labyrinth();
    
    // Initial display of the labyrinth
    labyrinth.printDisplay('map');

    // Listen for keydown events to move the character
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown' || 
            event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
            labyrinth.moveCharacter(event.key);
            labyrinth.printDisplay('map');
        }
    });
}
