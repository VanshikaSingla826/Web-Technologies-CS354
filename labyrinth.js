var CELL_SIZE = 40;

function Labyrinth() {
    this.map = [
        [0, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0],
        [1, 0, 1, 0, 0, 0],
        [1, 0, 1, 1, 1, 0],
        [1, 0, 0, 0, 1, 0]
    ];
    this.start = { x: 1, y: 1 }; // Starting position
    this.end = { x: 3, y: 4 };   // Ending position
    this.currentPos = { ...this.start }; // Character's current position

    this.printConsole = function() {
        console.clear();
        for (var row = 0; row < this.map.length; row++) {
            let line = '';
            for (var col = 0; col < this.map[row].length; col++) {
                line += this.map[row][col] === 1 ? '*' : ' ';
            }
            console.log(line);
        }
    };

    this.printDisplay = function(id) {
        var container = document.getElementById(id);
        container.style.position = 'relative';
        container.style.width = this.map[0].length * CELL_SIZE + 'px';
        container.style.height = this.map.length * CELL_SIZE + 'px';
        container.style.border = '2px solid black';

        // Clear existing content
        container.innerHTML = '';

        for (var row = 0; row < this.map.length; row++) {
            for (var col = 0; col < this.map[row].length; col++) {
                var cell = document.createElement('div');
                cell.style.position = 'absolute';
                cell.style.width = CELL_SIZE + 'px';
                cell.style.height = CELL_SIZE + 'px';
                cell.style.left = col * CELL_SIZE + 'px';
                cell.style.top = row * CELL_SIZE + 'px';
                cell.style.backgroundColor = this.map[row][col] === 1 ? 'grey' : 'white';
                cell.style.border = '1px solid black';

                if (this.currentPos.x === col && this.currentPos.y === row) {
                    cell.style.backgroundColor = 'blue'; // Character
                } else if (this.end.x === col && this.end.y === row) {
                    cell.style.backgroundColor = 'green'; // End
                }

                container.appendChild(cell);
            }
        }
    };

    this.moveCharacter = function(direction) {
        var newX = this.currentPos.x;
        var newY = this.currentPos.y;

        switch (direction) {
            case 'ArrowUp':
                newY--;
                break;
            case 'ArrowDown':
                newY++;
                break;
            case 'ArrowLeft':
                newX--;
                break;
            case 'ArrowRight':
                newX++;
                break;
        }

        if (newX >= 0 && newX < this.map[0].length &&
            newY >= 0 && newY < this.map.length &&
            this.map[newY][newX] === 0) {
            this.currentPos.x = newX;
            this.currentPos.y = newY;
            if (this.currentPos.x === this.end.x && this.currentPos.y === this.end.y) {
                alert('Congratulations!');
            }
        }
    };
}
