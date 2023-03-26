// select container of squares
const container = document.querySelector('.container');

// select other elements on the body
const body = document.querySelector('body');
const slider = document.querySelector('#slider');
const rainbowBtn = document.querySelector('#rainbow');
const bAndWBtn = document.querySelector('#black-n-white');
const eraseBtn = document.querySelector('#erase');
const modeBtns = document.querySelectorAll('.btn');
// set boolean for dragging depending on mousedown/mouseup
let drawActive = false;
// set default number of square grid (rows and columns both equal n)
let n = 16;
// create a variable for mode; determin if b&w, color, or erase
let mode = 'bAndW';

// toggle drawActive true status when mouse is depressed inside body
body.addEventListener('mousedown', () => {
    drawActive = true;
});
// toggle drawActive false when mouse is released anywhere on screen
window.addEventListener('mouseup', () => {
    drawActive = false;
});

modeBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => mode = e.target.value);
});


// create the initial grid
createGrid(16);

// create function to create the grid; accepts n as an argument, which will decide number of rows and columns
function createGrid(n) {
    for (let i = 0; i < n; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let j = 0; j < n; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style.cssText = `height: ${container.clientHeight / n}px; width: ${container.clientWidth / n}px;`
            newSquare.addEventListener('mouseover', changeColor);
            newSquare.addEventListener('mousedown', changeColor);
            newRow.appendChild(newSquare);
        }
        container.appendChild(newRow);
    }
}

function changeColor(e) {
    if (e.type === 'mouseover' && !drawActive) return;
    if (mode === 'bAndW') {
        e.target.style.backgroundColor = 'black';
    } else if (mode === 'erase') {
        e.target.style.backgroundColor = 'white';
    } else if (mode === 'rainbow') {
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgba(${r}, ${g}, ${b}, 1)`
    }
    
}

function resetGrid() {
    container.innerHTML = '';
    createGrid(n);
}
