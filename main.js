const container = document.querySelector('.container');

for (let i = 0; i < 16; i++) {
    const newRow = document.createElement('div');
    newRow.classList.add('row');
    for (let j = 0; j < 16; j++) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.style.cssText = `height: ${640 / 16}px; width: ${640 / 16}px;`
        newRow.appendChild(newSquare);
    }
    container.appendChild(newRow);
}