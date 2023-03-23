const container = document.querySelector('.container');
const body = document.querySelector('body');
let drawActive = false;
container.addEventListener('mousedown', (e) => {
    drawActive = true;
    e.preventDefault();
    console.log(drawActive);

});
container.addEventListener('mouseup', () => {
    drawActive = false;
    console.log(drawActive);
});


for (let i = 0; i < 16; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.cssText = `height: ${640 / 16}px; width: ${640 / 16}px;`
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