const container = document.querySelector('.container');
const body = document.querySelector('body');
let drawActive = false;
let n = 16;
body.addEventListener('mousedown', (e) => {
    drawActive = true;
    e.preventDefault();
    console.log(drawActive);

});
window.addEventListener('mouseup', () => {
    drawActive = false;
    console.log(drawActive);
});

function createGrid(n) {
    for (let i = 0; i < 16; i++) {
        const newRow = document.createElement('div');
        newRow.classList.add('row');
        for (let j = 0; j < 16; j++) {
            const newSquare = document.createElement('div');
            newSquare.classList.add('square');
            newSquare.style.cssText = `height: ${container.clientHeight / 16}px; width: ${container.clientWidth / 16}px;`
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


