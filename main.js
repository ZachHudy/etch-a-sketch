// select container of squares
const container = document.querySelector('.container');
// select entire body of page
const body = document.querySelector('body');
// set boolean for dragging depending on mousedown/mouseup
let drawActive = false;
// set default number of square grid (rows and columns both equal n)
let n = 16;
// toggle drawActive true status when mouse is depressed inside body
body.addEventListener('mousedown', (e) => {
    drawActive = true;
    e.preventDefault();
});
// toggle drawActive false when mouse is released anywhere on screen
window.addEventListener('mouseup', () => {
    drawActive = false;
});

// create function to create the grid; accepts n as an argument, which will decide number of rows and columns
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let j = 0; j < n; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style.cssText = `height: ${container.clientHeight / n}px; width: ${container.clientWidth / n}px;`
            newSquare.addEventListener('mousedown', (e) => {
                e.target.style.backgroundColor = 'black';
            });
            newSquare.addEventListener('mouseover', (e) => {
                if (!drawActive) return;
                e.target.style.backgroundColor = 'black';
            });
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}


