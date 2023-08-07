const container = document.querySelector('#container');
const btn = document.querySelector('button');
btn.addEventListener("click", getPlayerChoice);

function getPlayerChoice() {
    let playerChoice = prompt('What is your dimensions of choice?', '');
    if (playerChoice > 64) {
        alert("Too many squares");
        return;
    }
    createGrid(playerChoice, playerChoice);
}

function createGrid(rows, columns) {
    container.replaceChildren();
    for (let i = 0; i < rows * columns; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        const squareWidth = Math.floor(640 / rows);
        square.setAttribute('style', `width: ${squareWidth}px`);

        container.appendChild(square);

        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = 'black';
        });

        
    }
}
